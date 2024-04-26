import mediapipe as mp
import cv2
import math
import datetime
import pyttsx3
from tkinter import*
from PIL import Image, ImageTk

import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

win = Tk()
width=win.winfo_screenwidth()
height=win.winfo_screenheight()
win.geometry("%dx%d" % (width, height))

frame_1 = Frame(win, width=width, height=height, bg="#004dff").place(x=0, y=0)
win.title('SIGNIFY-ISL')
mylabel1= Label(win,text='Indian Sign Language Recognition',font=('Agency FB',25,'bold'),bd=5,bg='#3366cc',fg='#00f2ff',relief=GROOVE,width=5000 ).pack(pady=20,padx=500)

mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands


class SignLanguageConverter:
    current_gesture= None
    global CountGesture
    CountGesture = StringVar()
    def init(self):
        self.hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.7, min_tracking_confidence=0.5)
        self.current_gesture = None

    def detect_gesture(self, image):
        with mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.7, min_tracking_confidence=0.5) as hands:
            results = hands.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
            if results.multi_hand_landmarks:
                hand_landmarks = results.multi_hand_landmarks[0]
                self.current_gesture = self.get_gesture(hand_landmarks)

    def get_gesture(self, hand_landmarks):
        thumb_tip = hand_landmarks.landmark[4]

        index_finger_tip = hand_landmarks.landmark[8]
        middle_finger_tip = hand_landmarks.landmark[12]
        ring_finger_tip = hand_landmarks.landmark[16]
        little_finger_tip = hand_landmarks.landmark[20]

        #------------------------------(A-Z) Alphabets --for Indian Sign Language

        if thumb_tip.y < index_finger_tip.y < middle_finger_tip.y < ring_finger_tip.y < little_finger_tip.y:
            CountGesture.set('Okay')
            return "Okay"


        elif thumb_tip.y > index_finger_tip.y > middle_finger_tip.y > ring_finger_tip.y > little_finger_tip.y:
            CountGesture.set('I dislike It')
            return "Dislike"

        elif thumb_tip.y > index_finger_tip.y > middle_finger_tip.y > index_finger_tip.y:
            CountGesture.set('okay')
            return "A"


        elif thumb_tip.x < index_finger_tip.x < middle_finger_tip.x:
            if (hand_landmarks.landmark[2].x < hand_landmarks.landmark[5].x) and (hand_landmarks.landmark[3].x < hand_landmarks.landmark[5].x) and (hand_landmarks.landmark[4].x < hand_landmarks.landmark[5].x):
                CountGesture.set('Pause Gesture')
                return "Pause 1"
            else:
                return None
        #------------------------------Additional Features...

        else:
            wrist = hand_landmarks.landmark[0]
            index_finger_tip = hand_landmarks.landmark[8]
            index_finger = (index_finger_tip.x, index_finger_tip.y, index_finger_tip.z)
            wrist_coords = (wrist.x, wrist.y, wrist.z)
            vector = (index_finger[0] - wrist_coords[0], index_finger[1] - wrist_coords[1], index_finger[2] - wrist_coords[2])
            vector_len = (vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2) ** 0.5
            vector_unit = (vector[0] / vector_len, vector[1] / vector_len, vector[2] / vector_len)
            reference_vector = (0, 0, -1)
            dot_product = vector_unit[0] * reference_vector[0] + vector_unit[1] * reference_vector[1] + vector_unit[2] * reference_vector[2]
            angle = math.acos(dot_product) * 180 / math.pi
            if 20 < angle < 80:
                CountGesture.set('Pause 2')
                return "Point"
            else:
                return None



    def get_current_gesture(self):
        return self.current_gesture

    def release(self):
        self.hands.close()


def voice():
    engine = pyttsx3.init()
    engine.say((CountGesture.get()))
    engine.runAndWait()


def lbl():
    global label1
    label1.destroy()
def lbl2():
    global label1
    cv2.destroyAllWindows()
    label1.destroy()


exit=Button(win,text='Exit',padx=95,bg='#20262E',fg='#00f2ff',relief=GROOVE,width=7,bd=5,font=('Verdana',14,'bold') ,command=win.destroy).place(x=1200,y=400)


voic=Button(win,text='Sound',padx=95,bg='#20262E',fg='#00f2ff',relief=GROOVE,width=7,bd=5,font=('Verdana',14,'bold') ,command=voice).place(x=1200,y=350)


sign_lang_conv = SignLanguageConverter()
cap = cv2.VideoCapture(0)
label1 = Label(frame_1, width=640, height=480)
label1.place(x=450, y=150)
def select_img():
        _, frame = cap.read()
        #frame = cv2.resize(frame, (640, 500))
        sign_lang_conv.detect_gesture(frame)
        gesture = sign_lang_conv.get_current_gesture()
        if gesture:
            cv2.putText(frame, gesture, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

        with mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.5, min_tracking_confidence=0.5) as hands:
            results = hands.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

        framergb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image = Image.fromarray(framergb)
        finalImage = ImageTk.PhotoImage(image)
        label1.configure(image=finalImage)
        label1.image = finalImage
        crrgesture=Label(win,text='Current Gesture :',font=('Calibri',18,'bold'),bd=5,bg='#20262E',width=15,fg='#00f2ff',relief=GROOVE )
        status = Label(win,textvariable=CountGesture,font=('Georgia',18,'bold'),bd=5,bg='#20262E',width=30,fg='#00f2ff',relief=GROOVE )
        status.place(x=520,y=700)
        crrgesture.place(x=200,y=700)
        win.after(1, select_img)

select_img()
win.mainloop()
