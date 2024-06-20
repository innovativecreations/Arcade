#include <Servo.h>        
#include <NewPing.h>        
const int M1 = 4;
const int M2 = 5;
const int M3 = 6;
const int M4 = 7;


#define trig_pin 9
#define echo_pin 10 

#define maximum_distance 200
boolean goesForward = false;
int distance = 100;

NewPing sonar(trig_pin, echo_pin, maximum_distance); 
Servo servo_motor; 
void setup(){

  pinMode(M3, OUTPUT);
  pinMode(M1, OUTPUT);
  pinMode(M2, OUTPUT);
  pinMode(M4, OUTPUT);
  
  servo_motor.attach(8); 

  servo_motor.write(115);
  delay(2000);
  distance = readPing();
  delay(100);
  distance = readPing();
  delay(100);
  distance = readPing();
  delay(100);
  distance = readPing();
  delay(100);
}
void loop(){
  int distanceRight = 0
  int distanceLeft = 0;
  delay(50);
  if (distance <= 20){
    turnRight();
    moveStop();
    turnLeft();
    moveStop();
  }
  else{
    moveForward(); 
  }

}


void moveStop(){
  
  digitalWrite(M3, LOW);
  digitalWrite(M1, LOW);
  digitalWrite(M4, LOW);
  digitalWrite(M2, LOW);
}

void moveForward(){


    
    digitalWrite(M1, HIGH);
    digitalWrite(M3, HIGH);
  
    digitalWrite(M2, LOW);
    digitalWrite(M4, LOW); 

}

void moveBackward(){



  digitalWrite(M2, HIGH);
  digitalWrite(M4, HIGH);
  
  digitalWrite(M1, LOW);
  digitalWrite(M3, LOW);
  
}

void turnRight(){

  digitalWrite(M1, HIGH);
  digitalWrite(M4, HIGH);
  
  digitalWrite(M2, LOW);
  digitalWrite(M3, LOW);
  
  delay(500);
  
  digitalWrite(M1, HIGH);
  digitalWrite(M3, HIGH);
  
  digitalWrite(M2, LOW);
  digitalWrite(M4, LOW);
 
  
  
}

void turnLeft(){

  digitalWrite(M2, HIGH);
  digitalWrite(M3, HIGH);
  
  digitalWrite(M1, LOW);
  digitalWrite(M4, LOW);

  delay(500);
  
  digitalWrite(M1, HIGH);
  digitalWrite(M3, HIGH);
  
  digitalWrite(M2, LOW);
  digitalWrite(M4, LOW);
}