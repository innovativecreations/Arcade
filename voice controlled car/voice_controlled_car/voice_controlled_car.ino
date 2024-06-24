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

}
