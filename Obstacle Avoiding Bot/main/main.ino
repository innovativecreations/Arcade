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

  }
  else{
    
  }

}