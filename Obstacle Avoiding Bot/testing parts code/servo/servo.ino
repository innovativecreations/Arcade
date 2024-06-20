#include <Servo.h>

Servo myservo;  


void setup() {
  myservo.attach(9);  
}

void loop() {

  myservo.write(30);                  
  delay(15);      
  myservo.write(60);                  
  delay(15);   
  myservo.write(90);                  
  delay(15);   
  myservo.write(120);                  
  delay(15);
  myservo.write(180);                  
  delay(15);   
  myservo.write(90);                  
  delay(15);
  myservo.write(0);                  
  delay(15);                        
}