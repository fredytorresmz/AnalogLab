window.ANALOG_QUESTIONS = [
  {
    q:"En el modelo de caída constante para un diodo de silicio en conducción, ¿qué se aproxima normalmente?",
    options:["I_D = 0","V_D ≈ 0.7 V","V_D = V_S","R_D = ∞"],
    answer:1,
    explain:"Se reemplaza el diodo ON por una caída aproximadamente constante, típicamente 0.7 V para silicio en ejercicios introductorios."
  },
  {
    q:"En una recta de carga I_D=(V_S−V_D)/R, ¿qué ocurre si R aumenta y V_S permanece constante?",
    options:["La magnitud de la pendiente aumenta","La magnitud de la pendiente disminuye","La recta se vuelve vertical","El intercepto V_D=V_S desaparece"],
    answer:1,
    explain:"La pendiente es −1/R; al aumentar R, su magnitud disminuye."
  },
  {
    q:"Si V_A−V_K = 0.2 V y se usa un modelo de 0.7 V, el diodo se considera inicialmente:",
    options:["ON","OFF","En ruptura","Imposible de analizar"],
    answer:1,
    explain:"0.2 V no alcanza la caída asumida de 0.7 V, por lo que la hipótesis ON no es consistente."
  },
  {
    q:"El punto Q corresponde a:",
    options:["La máxima corriente del diodo","La intersección de la curva I–V y la recta de carga","El voltaje de la fuente","La resistencia dinámica únicamente"],
    answer:1,
    explain:"El punto Q satisface simultáneamente el comportamiento del dispositivo y la restricción impuesta por el circuito."
  },
  {
    q:"¿Cuál expresión corresponde a la ecuación de Shockley?",
    options:["I_D=V_D/R","I_D=I_S(e^{V_D/(nV_T)}−1)","V_D=V_S−R","I_D=V_S·R"],
    answer:1,
    explain:"Shockley modela la relación exponencial entre voltaje y corriente del diodo."
  }
];