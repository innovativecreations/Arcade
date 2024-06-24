String bt;
char data;

int m1 = 4;
int m2 = 5;
int m3 = 6;
int m4 = 7;

void setup() {

  Serial.begin(9600);

  pinMode(m1,OUTPUT);
  pinMode(m2,OUTPUT);
  pinMode(m3,OUTPUT);
  pinMode(m4,OUTPUT);

}

void loop() {

  while(Serial.available()){
    data = Serial.read();
    bt += data;
  }

  Serial.println(bt);

  if (bt.length()>0){
    if(bt == "move forward"){
        digitalWrite(m1,HIGH);
        digitalWrite(m2,LOW);
        digitalWrite(m3,HIGH);
        digitalWrite(m4,LOW);
        delay(1500);
        digitalWrite(m1,LOW);
        digitalWrite(m2,LOW);
        digitalWrite(m3,LOW);
        digitalWrite(m4,LOW);
      }
      
    if(bt == "move backward"){
      digitalWrite(m1,LOW);
      digitalWrite(m2,HIGH);
      digitalWrite(m3,LOW);
      digitalWrite(m4,HIGH);
      delay(1500);
      digitalWrite(m1,LOW);
      digitalWrite(m2,LOW);
      digitalWrite(m3,LOW);
      digitalWrite(m4,LOW);
    }
    if(bt == "turn left"){
      digitalWrite(m1,LOW);
      digitalWrite(m2,HIGH);
      digitalWrite(m3,HIGH);
      digitalWrite(m4,LOW);
      delay(800);
      digitalWrite(m1,LOW);
      digitalWrite(m2,LOW);
      digitalWrite(m3,LOW);
      digitalWrite(m4,LOW);
    }
    if(bt == "turn right"){

   }
   
    if(bt == "right"){

   }        
   bt = ""; 
}
}
