import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.dml.color import RGBColor

# Output path
OUTPUT_PATH = "./Transistores_MOSFET_Clase_ITM.pptx"

# Initialize Presentation
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Color Palette (ITM Dark Blue & Tech Branding)
NAVY_BG = RGBColor(11, 27, 61)       # #0B1B3D
CARD_BG = RGBColor(18, 38, 77)       # #12264D
CARD_BORDER = RGBColor(0, 192, 243)  # #00C0F3 (Cyan)
GOLD_ACCENT = RGBColor(255, 184, 0)  # #FFB800
WHITE = RGBColor(255, 255, 255)
LIGHT_TEXT = RGBColor(203, 213, 225) # Slate 300
MUTED_TEXT = RGBColor(148, 163, 184) # Slate 400
GREEN_ACCENT = RGBColor(52, 211, 153)# Emerald
RED_ACCENT = RGBColor(248, 113, 113) # Coral Red

def apply_itm_slide_base(slide, title_text, category_tag="TRANSISTORES DE EFECTO DE CAMPO - FET"):
    # Background full fill
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg.fill.solid()
    bg.fill.fore_color.rgb = NAVY_BG
    bg.line.color.rgb = NAVY_BG
    
    # Top Category Tag
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.35), Inches(11.5), Inches(0.35))
    tf_tag = tag_box.text_frame
    tf_tag.word_wrap = True
    p_tag = tf_tag.paragraphs[0]
    p_tag.text = category_tag.upper()
    p_tag.font.size = Pt(11)
    p_tag.font.bold = True
    p_tag.font.color.rgb = GOLD_ACCENT
    p_tag.font.name = "Arial"
    
    # Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.65), Inches(11.5), Inches(0.75))
    tf_title = title_box.text_frame
    tf_title.word_wrap = True
    p_title = tf_title.paragraphs[0]
    p_title.text = title_text
    p_title.font.size = Pt(22)
    p_title.font.bold = True
    p_title.font.color.rgb = WHITE
    p_title.font.name = "Arial"
    
    # Bottom Decorative Stripes (Cyan & Yellow ITM colors)
    line_cyan = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, Inches(7.18), Inches(8.5), Inches(0.06))
    line_cyan.fill.solid()
    line_cyan.fill.fore_color.rgb = CARD_BORDER
    line_cyan.line.fill.background()
    
    line_gold = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(8.5), Inches(7.18), Inches(4.833), Inches(0.06))
    line_gold.fill.solid()
    line_gold.fill.fore_color.rgb = GOLD_ACCENT
    line_gold.line.fill.background()
    
    # Footer Text
    foot_box = slide.shapes.add_textbox(Inches(0.8), Inches(7.22), Inches(11.7), Inches(0.25))
    tf_foot = foot_box.text_frame
    p_foot = tf_foot.paragraphs[0]
    p_foot.text = "Institución Universitaria ITM  |  Electrónica Analógica y Laboratorio  |  Docente: Fredy Andrés Torres Muñoz  |  www.itm.edu.co"
    p_foot.font.size = Pt(9)
    p_foot.font.color.rgb = MUTED_TEXT
    p_foot.font.name = "Arial"

def add_card(slide, left, top, width, height, fill_color=CARD_BG, border_color=CARD_BORDER, border_width=Pt(1.5)):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = fill_color
    if border_color:
        card.line.color.rgb = border_color
        card.line.width = border_width
    else:
        card.line.fill.background()
    return card

def add_speaker_notes(slide, notes_text):
    notes_slide = slide.notes_slide
    tf = notes_slide.notes_text_frame
    tf.text = notes_text

# ==========================================
# SLIDE 1: PORTADA
# ==========================================
s1 = prs.slides.add_slide(prs.slide_layouts[6])
# Full dark background
bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
bg1.fill.solid()
bg1.fill.fore_color.rgb = NAVY_BG
bg1.line.color.rgb = NAVY_BG

# Institutional badge
badge = add_card(s1, Inches(0.8), Inches(0.8), Inches(5.5), Inches(0.9), fill_color=RGBColor(14, 34, 72), border_color=CARD_BORDER)
tb_badge = s1.shapes.add_textbox(Inches(0.9), Inches(0.85), Inches(5.3), Inches(0.8))
tf_b = tb_badge.text_frame
p_b1 = tf_b.paragraphs[0]
p_b1.text = "INSTITUCIÓN UNIVERSITARIA ITM"
p_b1.font.bold = True
p_b1.font.size = Pt(14)
p_b1.font.color.rgb = WHITE
p_b2 = tf_b.add_paragraph()
p_b2.text = "Reacreditada en Alta Calidad  •  Facultad de Ingenierías"
p_b2.font.size = Pt(11)
p_b2.font.color.rgb = GOLD_ACCENT

# Main Title Card
main_c = add_card(s1, Inches(0.8), Inches(2.0), Inches(11.733), Inches(3.6), fill_color=RGBColor(16, 36, 75), border_color=GOLD_ACCENT, border_width=Pt(2))
tb_title = s1.shapes.add_textbox(Inches(1.2), Inches(2.3), Inches(10.9), Inches(3.0))
tf_t = tb_title.text_frame
tf_t.word_wrap = True

pt1 = tf_t.paragraphs[0]
pt1.text = "TRANSISTORES DE EFECTO DE CAMPO (FET)"
pt1.font.size = Pt(28)
pt1.font.bold = True
pt1.font.color.rgb = GOLD_ACCENT

pt2 = tf_t.add_paragraph()
pt2.text = "Especialidad: El Transistor MOSFET de Enriquecimiento (E-MOSFET)"
pt2.font.size = Pt(20)
pt2.font.bold = True
pt2.font.color.rgb = WHITE

pt3 = tf_t.add_paragraph()
pt3.text = "\nFísica del Dispositivo  •  Regiones de Operación  •  Análisis y Polarización DC  •  Aplicaciones Industriales"
pt3.font.size = Pt(13)
pt3.font.color.rgb = CARD_BORDER

pt4 = tf_t.add_paragraph()
pt4.text = "\nMarco de Referencia Bibliográfico: Boylestad & Nashelsky  |  Albert Malvino & David Bates"
pt4.font.size = Pt(12)
pt4.font.italic = True
pt4.font.color.rgb = LIGHT_TEXT

# Metadata Footer Card
meta_c = add_card(s1, Inches(0.8), Inches(5.8), Inches(11.733), Inches(1.1), fill_color=RGBColor(14, 30, 64), border_color=CARD_BORDER)
tb_meta = s1.shapes.add_textbox(Inches(1.1), Inches(5.85), Inches(11.1), Inches(0.9))
tf_m = tb_meta.text_frame
pm1 = tf_m.paragraphs[0]
pm1.text = "Asignatura: Electrónica Analógica y Laboratorio"
pm1.font.bold = True
pm1.font.size = Pt(13)
pm1.font.color.rgb = WHITE

pm2 = tf_m.add_paragraph()
pm2.text = "Docente: Ing. Fredy Andrés Torres Muñoz  |  Experiencia Senior en Ingeniería y Docencia"
pm2.font.size = Pt(12)
pm2.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s1, "Bienvenida a los estudiantes. Hoy damos un salto definitivo en la asignatura: dejamos atrás el transistor bipolar (BJT) para estudiar el dispositivo que hace posible la tecnología contemporánea: el MOSFET. Integramos el rigor analítico de Boylestad con la intuición práctica y de laboratorio de Malvino.")

# ==========================================
# SLIDE 2: CAMBIO DE PARADIGMA (BJT vs FET)
# ==========================================
s2 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s2, "1. El Gran Cambio de Paradigma: Del BJT al FET", "FUNDAMENTOS CONCEPTUALES")

# Card Left: BJT
c_bjt = add_card(s2, Inches(0.8), Inches(1.6), Inches(5.6), Inches(5.3), border_color=RGBColor(248, 113, 113))
tb_bjt = s2.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.2), Inches(4.8))
tf_bjt = tb_bjt.text_frame
tf_bjt.word_wrap = True

pb1 = tf_bjt.paragraphs[0]
pb1.text = "TRANSISTOR BJT (Control por Corriente)"
pb1.font.size = Pt(16)
pb1.font.bold = True
pb1.font.color.rgb = RGBColor(248, 113, 113)

items_bjt = [
    ("Mecanismo:", "Requiere flujo continuo de corriente en la base (I_B) para encender o amplificar."),
    ("Ecuación:", "I_C = β · I_B  |  Exponencial: I_C = I_S · exp(V_BE / V_T)"),
    ("Impedancia de entrada:", "Baja / Media (Z_in ~ 1 kΩ - 50 kΩ). Genera efecto de carga en la etapa previa."),
    ("Consumo estático:", "Disipa potencia constante en la base solo para mantener la conducción."),
    ("Analogía de Malvino:", "Como una palanca o válvula de resorte: exige fuerza mecánica continua para permanecer abierta.")
]
for title, desc in items_bjt:
    p = tf_bjt.add_paragraph()
    p.text = f"• {title} {desc}"
    p.font.size = Pt(12)
    p.font.color.rgb = LIGHT_TEXT

# Card Right: FET
c_fet = add_card(s2, Inches(6.8), Inches(1.6), Inches(5.7), Inches(5.3), border_color=GREEN_ACCENT)
tb_fet = s2.shapes.add_textbox(Inches(7.0), Inches(1.8), Inches(5.3), Inches(4.8))
tf_fet = tb_fet.text_frame
tf_fet.word_wrap = True

pf1 = tf_fet.paragraphs[0]
pf1.text = "TRANSISTOR FET / MOSFET (Control por Voltaje)"
pf1.font.size = Pt(16)
pf1.font.bold = True
pf1.font.color.rgb = GREEN_ACCENT

items_fet = [
    ("Mecanismo:", "Control electrostático: el voltaje compuerta-fuente (V_GS) modula el canal sin corriente."),
    ("Ecuación:", "I_G ≈ 0 A  |  I_D = k · (V_GS - V_GS(th))²  (Ecuación Cuadrática)"),
    ("Impedancia de entrada:", "Extremadamente alta (Z_in ~ 10¹² Ω a 10¹⁴ Ω). Aislamiento galvánico de compuerta."),
    ("Consumo estático:", "Prácticamente nulo en DC. Ideal para lógica CMOS y procesadores modernos."),
    ("Analogía de Malvino:", "Como una llave de paso con émbolo electrostático: no gasta líquido por la llave para abrir el tubo.")
]
for title, desc in items_fet:
    p = tf_fet.add_paragraph()
    p.text = f"• {title} {desc}"
    p.font.size = Pt(12)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s2, "Explicar la analogía de la válvula de agua de Malvino: En el BJT gastamos corriente para controlar corriente. En el FET la compuerta está aislada por vidrio (SiO2), así que la corriente de compuerta IG es cero en DC. Esto es lo que permite que un microcontrolador maneje motores sin sobrecargarse.")

# ==========================================
# SLIDE 3: TABLA COMPARATIVA BJT vs FET
# ==========================================
s3 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s3, "2. Comparativa de Ingeniería: BJT frente a FET", "TABLA MAESTRA DE DISEÑO")

# Add table
rows, cols = 8, 4
left, top, width, height = Inches(0.8), Inches(1.5), Inches(11.733), Inches(5.4)
table_shape = s3.shapes.add_table(rows, cols, left, top, width, height)
tbl = table_shape.table

# Set Column Widths
tbl.columns[0].width = Inches(2.2)
tbl.columns[1].width = Inches(2.9)
tbl.columns[2].width = Inches(3.2)
tbl.columns[3].width = Inches(3.433)

headers = ["Criterio de Ingeniería", "BJT (Bipolar)", "FET / MOSFET (Unipolar)", "Impacto en Diseño y Aplicación"]
for j, h in enumerate(headers):
    cell = tbl.cell(0, j)
    cell.fill.solid()
    cell.fill.fore_color.rgb = RGBColor(16, 42, 88)
    p = cell.text_frame.paragraphs[0]
    p.text = h
    p.font.bold = True
    p.font.size = Pt(11)
    p.font.color.rgb = GOLD_ACCENT

data = [
    ("Parámetro de Control", "Corriente de base (I_B)", "Voltaje compuerta-fuente (V_GS)", "El FET no sobrecarga la etapa de control previa."),
    ("Portadores de Carga", "Bipolar (electrones y huecos)", "Unipolar (solo electrones o huecos)", "FET sin almacenamiento de minoritarios (conmutación veloz)."),
    ("Impedancia Entrada (Z_in)", "Media (1 kΩ a 50 kΩ)", "Casi Infinita (10⁹ a 10¹⁴ Ω)", "FET ideal para etapas de entrada de instrumentación."),
    ("Corriente Entrada en DC", "Finita (I_B = I_C / β)", "I_G ≈ 0 A en estado estacionario", "Consumo estático nulo en la compuerta del FET."),
    ("Ecuación de Salida", "Exponencial: I_C = I_S · exp(V_BE/V_T)", "Cuadrática: I_D = k·(V_GS - V_th)²", "El BJT tiene mayor transconductancia (gm) a igual corriente."),
    ("Estabilidad Térmica", "Riesgo de embalamiento térmico", "Coeficiente negativo en alta I_D", "Los MOSFETs se pueden poner en paralelo fácilmente."),
    ("Aplicación Principal", "Amplificadores lineales de alta ganancia", "Conmutación de potencia, CMOS, VLSI", "MOSFET domina electrónica de potencia y cómputo digital.")
]

for i, row in enumerate(data):
    for j, val in enumerate(row):
        cell = tbl.cell(i+1, j)
        cell.fill.solid()
        cell.fill.fore_color.rgb = RGBColor(14, 30, 62) if i % 2 == 0 else RGBColor(18, 38, 77)
        p = cell.text_frame.paragraphs[0]
        p.text = val
        p.font.size = Pt(10)
        p.font.color.rgb = WHITE if j == 0 else LIGHT_TEXT

add_speaker_notes(s3, "Resaltar el concepto de 'Embalamiento térmico': Si un BJT se calienta, conduce más corriente y se puede destruir. El MOSFET de potencia, al calentarse, aumenta su resistencia RDS(on), autoestabilizándose. Por eso los inversores solares y variadores de frecuencia usan MOSFETs e IGBTs.")

# ==========================================
# SLIDE 4: TAXONOMÍA DE LA FAMILIA FET
# ==========================================
s4 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s4, "3. Taxonomía de la Familia FET: ¿Cuál usar y por qué?", "CLASIFICACIÓN GENERAL")

# 3 Columns for JFET, D-MOSFET, E-MOSFET
w_col = Inches(3.64)
gap = Inches(0.4)

# Col 1: JFET
c1 = add_card(s4, Inches(0.8), Inches(1.6), w_col, Inches(5.3), border_color=CARD_BORDER)
tb1 = s4.shapes.add_textbox(Inches(0.95), Inches(1.8), w_col - Inches(0.3), Inches(4.8))
tf1 = tb1.text_frame
tf1.word_wrap = True
p1 = tf1.paragraphs[0]
p1.text = "1. JFET (Unión)"
p1.font.bold = True
p1.font.size = Pt(16)
p1.font.color.rgb = GOLD_ACCENT

items_1 = [
    ("Estructura:", "Unión P-N polarizada en inversa."),
    ("Modo:", "Siempre de agotamiento / empobrecimiento."),
    ("Estado en V_GS = 0:", "Normalmente encendido (conduce I_DSS)."),
    ("Control:", "V_GS negativo estrangula el canal (canal N)."),
    ("Ecuación (Shockley):", "I_D = I_DSS · (1 - V_GS / V_P)²"),
    ("Uso actual:", "Fuentes de corriente constante, previo de audio de bajo ruido, conmutador analógico RF.")
]
for t, d in items_1:
    p = tf1.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

# Col 2: D-MOSFET
c2 = add_card(s4, Inches(0.8) + w_col + gap, Inches(1.6), w_col, Inches(5.3), border_color=CARD_BORDER)
tb2 = s4.shapes.add_textbox(Inches(0.95) + w_col + gap, Inches(1.8), w_col - Inches(0.3), Inches(4.8))
tf2 = tb2.text_frame
tf2.word_wrap = True
p2 = tf2.paragraphs[0]
p2.text = "2. D-MOSFET (Empobrecimiento)"
p2.font.bold = True
p2.font.size = Pt(16)
p2.font.color.rgb = CARD_BORDER

items_2 = [
    ("Estructura:", "Compuerta aislada con óxido SiO2 y canal físico preexistente."),
    ("Modo dual:", "Opera en empobrecimiento (V_GS < 0) y enriquecimiento (V_GS > 0)."),
    ("Estado en V_GS = 0:", "Normalmente encendido (conduce I_DSS)."),
    ("Ecuación:", "Sigue la ecuación de Shockley de Boylestad."),
    ("Uso:", "Amplificadores RF de alta frecuencia y circuitos de protección.")
]
for t, d in items_2:
    p = tf2.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

# Col 3: E-MOSFET
c3 = add_card(s4, Inches(0.8) + (w_col + gap)*2, Inches(1.6), w_col, Inches(5.3), border_color=GREEN_ACCENT, border_width=Pt(2))
tb3 = s4.shapes.add_textbox(Inches(0.95) + (w_col + gap)*2, Inches(1.8), w_col - Inches(0.3), Inches(4.8))
tf3 = tb3.text_frame
tf3.word_wrap = True
p3 = tf3.paragraphs[0]
p3.text = "3. E-MOSFET (Enriquecimiento)"
p3.font.bold = True
p3.font.size = Pt(16)
p3.font.color.rgb = GREEN_ACCENT

items_3 = [
    ("Estructura:", "Compuerta aislada por SiO2 SIN canal físico previo."),
    ("Modo:", "Exclusivamente de enriquecimiento (canal inducido)."),
    ("Estado en V_GS = 0:", "Normalmente APAGADO (I_D = 0 A). ¡Seguridad industrial garantizada!"),
    ("Condición:", "Requiere superar el Voltaje Umbral: V_GS > V_GS(th)."),
    ("Ecuación cuadrática:", "I_D = k · (V_GS - V_GS(th))²"),
    ("Importancia:", "¡Representa más del 95% de la industria de semiconductores hoy en día!")
]
for t, d in items_3:
    p = tf3.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s4, "Hacer hincapié en la ventaja de seguridad del E-MOSFET: Al no conducir con V_GS = 0 V, si un cable de compuerta se desconecta o la tarjeta se desenergiza, el circuito se queda apagado. En cambio con un JFET o D-MOSFET, con 0 V queda totalmente conduciendo, lo que en potencia causaría un desastre.")

# ==========================================
# SLIDE 5: ANATOMÍA FÍSICA Y CAPA DE ÓXIDO
# ==========================================
s5 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s5, "4. Anatomía y Construcción Física del E-MOSFET", "FÍSICA DE SEMICONDUCTORES")

# Image on Left
img_path5 = "./diagrama_estructura_fisica.png"
if os.path.exists(img_path5):
    s5.shapes.add_picture(img_path5, Inches(0.8), Inches(1.6), width=Inches(6.8))

# Explanatory card on Right
c5 = add_card(s5, Inches(7.8), Inches(1.6), Inches(4.7), Inches(5.3), border_color=CARD_BORDER)
tb5 = s5.shapes.add_textbox(Inches(8.0), Inches(1.8), Inches(4.3), Inches(4.8))
tf5 = tb5.text_frame
tf5.word_wrap = True

p5_1 = tf5.paragraphs[0]
p5_1.text = "ELEMENTOS CLAVE DE CONSTRUCCIÓN"
p5_1.font.bold = True
p5_1.font.size = Pt(15)
p5_1.font.color.rgb = GOLD_ACCENT

items_phys = [
    ("Sustrato tipo P:", "Oblea de silicio base donde los huecos son portadores mayoritarios."),
    ("Pozos N+ (D y S):", "Regiones fuertemente dopadas con donadores de electrones. Forman los contactos de Drenador y Fuente."),
    ("Dieléctrico de SiO2:", "Película de óxido de silicio ultra delgada (< 100 nm). Actúa como un condensador perfecto."),
    ("Electrodo de Compuerta:", "Metal o silicio policristalino. No tiene conexión óhmica con el silicio: aislamiento galvánico total."),
    ("Condición inicial (V_GS = 0 V):", "Dos uniones P-N en oposición (N+-P-N+) bloquean todo flujo. El transistor está en circuito abierto.")
]
for t, d in items_phys:
    p = tf5.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s5, "Mencionar la advertencia de Malvino sobre el grosor del óxido: Menos de 100 nanómetros significa que una descarga electrostática humana de 2000 V genera campos superiores a 10 millones de V/cm, perforando el dieléctrico irreversiblemente. En el laboratorio del ITM siempre usamos manilla antiestática o descargamos tocando tierra antes de manipular MOSFETs.")

# ==========================================
# SLIDE 6: CAPA DE INVERSIÓN Y V_GS(th)
# ==========================================
s6 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s6, "5. Inducción del Canal y Voltaje Umbral (V_GS(th))", "MECANISMO ELECTROSTÁTICO")

# 3 horizontal process cards
c_p1 = add_card(s6, Inches(0.8), Inches(1.6), Inches(3.64), Inches(3.6), border_color=CARD_BORDER)
tb_p1 = s6.shapes.add_textbox(Inches(0.95), Inches(1.8), Inches(3.3), Inches(3.2))
tf_p1 = tb_p1.text_frame
tf_p1.word_wrap = True
pp1 = tf_p1.paragraphs[0]
pp1.text = "FASE 1: Repulsión"
pp1.font.bold = True
pp1.font.size = Pt(15)
pp1.font.color.rgb = CARD_BORDER
p = tf_p1.add_paragraph()
p.text = "• Al aplicar V_GS > 0 V pequeño, el potencial positivo en la compuerta repele los huecos del sustrato P lejos de la interfaz con el óxido.\n• Se forma una zona de agotamiento desierta de portadores libres, dejando iones aceptores negativos inmóviles."
p.font.size = Pt(11)
p.font.color.rgb = LIGHT_TEXT

c_p2 = add_card(s6, Inches(4.84), Inches(1.6), Inches(3.64), Inches(3.6), border_color=GOLD_ACCENT)
tb_p2 = s6.shapes.add_textbox(Inches(5.0), Inches(1.8), Inches(3.3), Inches(3.2))
tf_p2 = tb_p2.text_frame
tf_p2.word_wrap = True
pp2 = tf_p2.paragraphs[0]
pp2.text = "FASE 2: Tensión Umbral"
pp2.font.bold = True
pp2.font.size = Pt(15)
pp2.font.color.rgb = GOLD_ACCENT
p = tf_p2.add_paragraph()
p.text = "• Al alcanzar V_GS = V_GS(th), el campo eléctrico es suficientemente intenso para atraer los electrones libres minoritarios del sustrato hacia la superficie del óxido.\n• V_GS(th) típico: 1.0 V a 3.0 V en señal pequeña; 2.0 V a 4.5 V en potencia."
p.font.size = Pt(11)
p.font.color.rgb = LIGHT_TEXT

c_p3 = add_card(s6, Inches(8.88), Inches(1.6), Inches(3.64), Inches(3.6), border_color=GREEN_ACCENT)
tb_p3 = s6.shapes.add_textbox(Inches(9.05), Inches(1.8), Inches(3.3), Inches(3.2))
tf_p3 = tb_p3.text_frame
tf_p3.word_wrap = True
pp3 = tf_p3.paragraphs[0]
pp3.text = "FASE 3: Inversión Fuerte"
pp3.font.bold = True
pp3.font.size = Pt(15)
pp3.font.color.rgb = GREEN_ACCENT
p = tf_p3.add_paragraph()
p.text = "• Con V_GS > V_GS(th), la concentración de electrones en la superficie supera la de huecos: ¡la superficie tipo P se invierte a tipo N!\n• Se establece un puente continuo de baja resistencia entre Fuente y Drenador: el canal está abierto."
p.font.size = Pt(11)
p.font.color.rgb = LIGHT_TEXT

# Formula Card at Bottom
f_card = add_card(s6, Inches(0.8), Inches(5.4), Inches(11.733), Inches(1.5), fill_color=RGBColor(16, 38, 77), border_color=GOLD_ACCENT)
tb_fc = s6.shapes.add_textbox(Inches(1.1), Inches(5.5), Inches(11.1), Inches(1.3))
tf_fc = tb_fc.text_frame
pfc1 = tf_fc.paragraphs[0]
pfc1.text = "DEFINICIÓN FORMAL SEGÚN BOYLESTAD & NASHELSKY:"
pfc1.font.bold = True
pfc1.font.size = Pt(12)
pfc1.font.color.rgb = GOLD_ACCENT
pfc2 = tf_fc.add_paragraph()
pfc2.text = "El Voltaje Umbral V_GS(th) es el nivel de potencial compuerta-fuente indispensable para crear la capa de inversión y establecer una corriente de drenaje mensurable (I_D > 10 µA). Por debajo de V_GS(th), el canal no existe y el dispositivo permanece en estado de corte total."
pfc2.font.size = Pt(11)
pfc2.font.color.rgb = WHITE

add_speaker_notes(s6, "Pregunta para los estudiantes en el aula: ¿Por qué se llama 'capa de inversión'? Respuesta: Porque el silicio era originalmente tipo P, pero bajo la compuerta la población de electrones supera a los huecos, invirtiendo la polaridad eléctrica localmente a tipo N.")

# ==========================================
# SLIDE 7: LAS TRES REGIONES DE OPERACIÓN
# ==========================================
s7 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s7, "6. Las Tres Regiones de Operación: Corte, Óhmica y Saturación", "OPERACIÓN Y MODELADO")

# Alert Box: False friend
al_card = add_card(s7, Inches(0.8), Inches(1.5), Inches(11.733), Inches(1.05), fill_color=RGBColor(55, 20, 25), border_color=RED_ACCENT)
tb_al = s7.shapes.add_textbox(Inches(1.0), Inches(1.55), Inches(11.3), Inches(0.95))
tf_al = tb_al.text_frame
tf_al.word_wrap = True
pal1 = tf_al.paragraphs[0]
pal1.text = "¡ALERTA PEDAGÓGICA SENIOR: TRAMPA TERMINOLÓGICA DE EXAMEN!"
pal1.font.bold = True
pal1.font.size = Pt(12)
pal1.font.color.rgb = RED_ACCENT
pal2 = tf_al.add_paragraph()
pal2.text = "• En el BJT: 'Saturación' significa interruptor cerrado (máxima corriente, V_CE ~ 0.2 V).\n• En el MOSFET: 'Saturación' significa FUENTE DE CORRIENTE CONSTANTE (estrangulamiento / zona activa de amplificación). El estado de interruptor cerrado en MOSFET se llama REGIÓN ÓHMICA O TRIODO."
pal2.font.size = Pt(10.5)
pal2.font.color.rgb = WHITE

# 3 Cards for Regions
w3 = Inches(3.64)
# Region 1: Corte
c_r1 = add_card(s7, Inches(0.8), Inches(2.75), w3, Inches(4.1), border_color=RED_ACCENT)
tb_r1 = s7.shapes.add_textbox(Inches(0.95), Inches(2.9), w3 - Inches(0.3), Inches(3.8))
tf_r1 = tb_r1.text_frame
tf_r1.word_wrap = True
pr1 = tf_r1.paragraphs[0]
pr1.text = "1. REGIÓN DE CORTE"
pr1.font.bold = True
pr1.font.size = Pt(14)
pr1.font.color.rgb = RED_ACCENT
items_r1 = [
    ("Condición:", "V_GS < V_GS(th)"),
    ("Corriente:", "I_D = 0 A  (I_G = 0 A)"),
    ("Estado circuital:", "Interruptor abierto."),
    ("Resistencia D-S:", "R_DS ≈ ∞  (cientos de MΩ)"),
    ("Aplicación:", "Estado apagado (OFF) en conmutadores digitales y relés.")
]
for t, d in items_r1:
    p = tf_r1.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(10.5)
    p.font.color.rgb = LIGHT_TEXT

# Region 2: Óhmica
c_r2 = add_card(s7, Inches(4.84), Inches(2.75), w3, Inches(4.1), border_color=CARD_BORDER)
tb_r2 = s7.shapes.add_textbox(Inches(5.0), Inches(2.9), w3 - Inches(0.3), Inches(3.8))
tf_r2 = tb_r2.text_frame
tf_r2.word_wrap = True
pr2 = tf_r2.paragraphs[0]
pr2.text = "2. REGIÓN ÓHMICA / TRIODO"
pr2.font.bold = True
pr2.font.size = Pt(14)
pr2.font.color.rgb = CARD_BORDER
items_r2 = [
    ("Condición:", "V_GS ≥ V_GS(th)  Y  V_DS < V_GS - V_GS(th)"),
    ("Física:", "Canal continuo de Fuente a Drenador sin estrangulamiento."),
    ("Comportamiento:", "Resistencia pura controlada por tensión (R_DS(on))."),
    ("Ecuación:", "I_D ≈ k · [2(V_GS - V_th)V_DS - V_DS²]"),
    ("Aplicación:", "Interruptor cerrado (ON) de alta eficiencia en fuentes conmutadas.")
]
for t, d in items_r2:
    p = tf_r2.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(10.5)
    p.font.color.rgb = LIGHT_TEXT

# Region 3: Saturación
c_r3 = add_card(s7, Inches(8.88), Inches(2.75), w3, Inches(4.1), border_color=GREEN_ACCENT)
tb_r3 = s7.shapes.add_textbox(Inches(9.05), Inches(2.9), w3 - Inches(0.3), Inches(3.8))
tf_r3 = tb_r3.text_frame
tf_r3.word_wrap = True
pr3 = tf_r3.paragraphs[0]
pr3.text = "3. REGIÓN DE SATURACIÓN"
pr3.font.bold = True
pr3.font.size = Pt(14)
pr3.font.color.rgb = GREEN_ACCENT
items_r3 = [
    ("Condición:", "V_GS ≥ V_GS(th)  Y  V_DS ≥ V_GS - V_GS(th)"),
    ("Física:", "Estrangulamiento (pinch-off) del canal en el extremo del drenador."),
    ("Comportamiento:", "Fuente de corriente controlada por V_GS (I_D casi independiente de V_DS)."),
    ("Ecuación Boylestad:", "I_D = k · (V_GS - V_GS(th))²"),
    ("Aplicación:", "Amplificadores analógicos de señal y fuentes de corriente.")
]
for t, d in items_r3:
    p = tf_r3.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(10.5)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s7, "Este es el concepto que más cuesta a los estudiantes: Explicarles que 'saturar' en MOSFET significa que la corriente llegó al límite superior plano que le permite ese voltaje V_GS específico (estrangulamiento). Para que funcione como interruptor cerrado, necesitamos estar en la región Óhmica con el menor V_DS posible.")

# ==========================================
# SLIDE 8: ECUACIÓN Y CURVAS DUALES
# ==========================================
s8 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s8, "7. Ecuación Cuadrática Fundamental y Curvas Duales", "MODELADO MATEMÁTICO")

# Image on Left
img_path8 = "./diagrama_curvas_mosfet.png"
if os.path.exists(img_path8):
    s8.shapes.add_picture(img_path8, Inches(0.8), Inches(1.5), width=Inches(7.3))

# Formula and Analysis Card on Right
c8 = add_card(s8, Inches(8.3), Inches(1.5), Inches(4.2), Inches(5.4), border_color=GOLD_ACCENT)
tb8 = s8.shapes.add_textbox(Inches(8.5), Inches(1.7), Inches(3.8), Inches(5.0))
tf8 = tb8.text_frame
tf8.word_wrap = True

p8_1 = tf8.paragraphs[0]
p8_1.text = "ECUACIONES DE BOYLESTAD"
p8_1.font.bold = True
p8_1.font.size = Pt(14)
p8_1.font.color.rgb = GOLD_ACCENT

eq_items = [
    ("Ecuación de Saturación:", "\nI_D = k · (V_GS - V_GS(th))²\nLaTeX: \\[ I_D = k (V_{GS} - V_{GS(th)})^2 \\]"),
    ("Cálculo del Parámetro k:", "\nk = I_D(on) / (V_GS(on) - V_GS(th))²\nLaTeX: \\[ k = \\frac{I_{D(on)}}{(V_{GS(on)} - V_{GS(th)})^2} \\]"),
    ("Límite de Estrangulamiento:", "\nV_DS(sat) = V_GS - V_GS(th)\nMarca la parábola divisoria entre Óhmica y Saturación."),
    ("Física Interna (Malvino):", "\nk = ½ · µ_n · C_ox · (W / L)\nDonde W/L es la relación de aspecto geométrica del canal.")
]
for t, d in eq_items:
    p = tf8.add_paragraph()
    p.text = f"• {t}{d}"
    p.font.size = Pt(10)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s8, "Mostrar en la gráfica cómo la curva de transferencia de la izquierda engendra directamente los niveles horizontales de saturación de la derecha. Si V_GS aumenta, el nivel de corriente saturada sube de manera cuadrática.")

# ==========================================
# SLIDE 9: SIMBOLOGÍA NORMALIZADA
# ==========================================
s9 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s9, "8. Simbología Normalizada IEEE / IEC y Diodo de Cuerpo", "ESTÁNDARES DE ESQUEMÁTICA")

# Image on Left
img_path9 = "./diagrama_simbologia_fet.png"
if os.path.exists(img_path9):
    s9.shapes.add_picture(img_path9, Inches(0.8), Inches(1.5), width=Inches(7.3))

# Explanatory card on Right
c9 = add_card(s9, Inches(8.3), Inches(1.5), Inches(4.2), Inches(5.4), border_color=CARD_BORDER)
tb9 = s9.shapes.add_textbox(Inches(8.5), Inches(1.7), Inches(3.8), Inches(5.0))
tf9 = tb9.text_frame
tf9.word_wrap = True

p9_1 = tf9.paragraphs[0]
p9_1.text = "CÓDIGO VISUAL DEL SÍMBOLO"
p9_1.font.bold = True
p9_1.font.size = Pt(14)
p9_1.font.color.rgb = GOLD_ACCENT

sym_items = [
    ("Línea discontinua (3 trazos):", "Indica canal normalmente abierto (E-MOSFET). Solo hay conducción si aplicamos voltaje umbral."),
    ("Línea continua:", "Indica canal físico preexistente (JFET y D-MOSFET)."),
    ("Dirección de la flecha:", "Canal N: apunta hacia el canal (P->N).\nCanal P: apunta hacia afuera (N->P)."),
    ("El Diodo de Cuerpo (Body Diode):", "En los MOSFETs discretos de 3 terminales, el sustrato está conectado internamente a la fuente, formando un diodo intrínseco en antiparalelo entre S y D. ¡Conduce en inversa!")
]
for t, d in sym_items:
    p = tf9.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(10.5)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s9, "Atención con el diodo de cuerpo (Body Diode): Muchos estudiantes cometen el error de conectar el MOSFET al revés en DC, y la carga queda siempre encendida a través del diodo parásito interno. Es vital explicar cómo se forma y cómo aprovecharlo o protegerlo.")

# ==========================================
# SLIDE 10: POLARIZACIÓN DC: DIVISOR DE VOLTAJE
# ==========================================
s10 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s10, "9. Análisis en DC: Polarización por Divisor de Voltaje", "CIRCUITOS DE POLARIZACIÓN")

# Left Card: Theoretical Advantage
c10_l = add_card(s10, Inches(0.8), Inches(1.6), Inches(5.6), Inches(5.3), border_color=CARD_BORDER)
tb10_l = s10.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.2), Inches(4.8))
tf10_l = tb10_l.text_frame
tf10_l.word_wrap = True

pt10_1 = tf10_l.paragraphs[0]
pt10_1.text = "LA GRAN VENTAJA FRENTE AL BJT"
pt10_1.font.bold = True
pt10_1.font.size = Pt(15)
pt10_1.font.color.rgb = GOLD_ACCENT

p = tf10_l.add_paragraph()
p.text = "• En el BJT, la corriente de base I_B cargaba el divisor resistivo, obligándonos a comprobar si β·R_E ≥ 10·R_2 para poder usar la aproximación del divisor ideal.\n• ¡En el MOSFET no hay corriente de entrada en DC! Dado que I_G = 0 A, el divisor de voltaje formado por R_1 y R_2 es EXACTO e inmune a las variaciones del transistor."
p.font.size = Pt(11.5)
p.font.color.rgb = LIGHT_TEXT

p = tf10_l.add_paragraph()
p.text = "• Podemos usar resistencias gigantescas en el orden de los Megao疗mios (MΩ) como 10 MΩ o 22 MΩ para polarizar la compuerta, garantizando un consumo de potencia estática prácticamente nulo."
p.font.size = Pt(11)
p.font.color.rgb = WHITE

# Right Card: Mathematical Formulation
c10_r = add_card(s10, Inches(6.8), Inches(1.6), Inches(5.7), Inches(5.3), border_color=GREEN_ACCENT)
tb10_r = s10.shapes.add_textbox(Inches(7.0), Inches(1.8), Inches(5.3), Inches(4.8))
tf10_r = tb10_r.text_frame
tf10_r.word_wrap = True

pt10_2 = tf10_r.paragraphs[0]
pt10_2.text = "ALGORITMO DE RESOLUCIÓN PASO A PASO"
pt10_2.font.bold = True
pt10_2.font.size = Pt(15)
pt10_2.font.color.rgb = GREEN_ACCENT

algo_steps = [
    ("Paso 1: Voltaje de Compuerta (V_G)", "\nV_G = V_DD · [ R_2 / (R_1 + R_2) ]\nLaTeX: \\[ V_G = V_{DD} \\left( \\frac{R_2}{R_1 + R_2} \\right) \\]"),
    ("Paso 2: Malla Compuerta-Fuente (V_GS)", "\nV_GS = V_G - I_D · R_S\nLaTeX: \\[ V_{GS} = V_G - I_D R_S \\]"),
    ("Paso 3: Sustituir en Ecuación del MOSFET", "\nI_D = k · (V_GS - V_GS(th))²\nI_D = k · [(V_G - I_D·R_S) - V_GS(th)]²\nGenera una ecuación de segundo grado: A·I_D² + B·I_D + C = 0"),
    ("Paso 4: Verificación de Región de Saturación", "\nV_DS = V_DD - I_D·(R_D + R_S)\nComprobar: V_DS ≥ V_GS - V_GS(th)")
]
for t, d in algo_steps:
    p = tf10_r.add_paragraph()
    p.text = f"• {t}{d}"
    p.font.size = Pt(10)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s10, "Subrayar a los estudiantes que no teman a los resistores de 10 Megao疗mios en compuerta: en BJT eso sería una locura porque apagaría el transistor por falta de corriente, pero en MOSFET es la norma estándar industrial para ahorrar energía.")

# ==========================================
# SLIDE 11: EJEMPLO RESUELTO (PARTE 1)
# ==========================================
s11 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s11, "10. Ejercicio Resuelto Paso a Paso (Tipo Parcial ITM) - Parte 1", "ANÁLISIS MATEMÁTICO RIGUROSO")

# Left: Circuit schematic
img_path11 = "./diagrama_divisor_tension.png"
if os.path.exists(img_path11):
    s11.shapes.add_picture(img_path11, Inches(0.8), Inches(1.5), width=Inches(6.8))

# Right: Calculations
c11 = add_card(s11, Inches(7.8), Inches(1.5), Inches(4.7), Inches(5.4), border_color=GOLD_ACCENT)
tb11 = s11.shapes.add_textbox(Inches(8.0), Inches(1.7), Inches(4.3), Inches(5.0))
tf11 = tb11.text_frame
tf11.word_wrap = True

p11_1 = tf11.paragraphs[0]
p11_1.text = "PLANTEAMIENTO Y DATOS COMERCIALES"
p11_1.font.bold = True
p11_1.font.size = Pt(13)
p11_1.font.color.rgb = GOLD_ACCENT

calcs1 = [
    ("Datos del circuito:", "V_DD = 24 V, R_1 = 22 MΩ, R_2 = 10 MΩ, R_D = 1.8 kΩ, R_S = 820 Ω."),
    ("Datos de hoja de datos (Datasheet):", "V_GS(th) = 2.5 V | I_D(on) = 5 mA para V_GS(on) = 5.0 V."),
    ("Paso 1: Cálculo del parámetro k", "\nk = I_D(on) / (V_GS(on) - V_GS(th))²\nk = 5 mA / (5.0 V - 2.5 V)²\nk = 5 mA / 6.25 V² = 0.80 mA/V²\nLaTeX: \\[ k = 0.80\\,\\text{mA/V}^2 \\]"),
    ("Paso 2: Voltaje de Compuerta V_G", "\nV_G = 24 V · [ 10 MΩ / (22 MΩ + 10 MΩ) ]\nV_G = 24 V · (10 / 32) = 7.50 V\nLaTeX: \\[ V_G = 7.50\\,\\text{V} \\]"),
    ("Paso 3: Malla Compuerta-Fuente", "\nV_GS = 7.50 V - I_D · (0.82 kΩ)\n(con I_D expresada en mA)")
]
for t, d in calcs1:
    p = tf11.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(10)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s11, "Guiar a los estudiantes en las unidades: Noten que al usar k en mA/V^2 y R_S en kΩ, el producto I_D · R_S da voltios directamente sin necesidad de arrastrar potencias de diez confusas. Esto evita el 90% de los errores de calculadora en los parciales.")

# ==========================================
# SLIDE 12: EJEMPLO RESUELTO (PARTE 2 - PUNTO Q)
# ==========================================
s12 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s12, "11. Ejercicio Resuelto (Parte 2): Raíz Cuadrática y Verificación", "RESOLUCIÓN Y CRITERIO FÍSICO")

# Left Card: Cuadratic resolution
c12_l = add_card(s12, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4), border_color=CARD_BORDER)
tb12_l = s12.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(5.2), Inches(5.0))
tf12_l = tb12_l.text_frame
tf12_l.word_wrap = True

pt12_1 = tf12_l.paragraphs[0]
pt12_1.text = "PASO 4: ECUACIÓN CUADRÁTICA EN I_D"
pt12_1.font.bold = True
pt12_1.font.size = Pt(14)
pt12_1.font.color.rgb = CARD_BORDER

steps_q = [
    ("Sustitución en la ecuación cuadrática:", "\nI_D = 0.80 · [(7.50 - 0.82·I_D) - 2.5]²\nI_D = 0.80 · [5.0 - 0.82·I_D]²\nI_D = 0.80 · (25.0 - 8.2·I_D + 0.6724·I_D²)\nI_D = 20.0 - 6.56·I_D + 0.538·I_D²"),
    ("Forma canónica (A·x² + B·x + C = 0):", "\n0.538·I_D² - 7.56·I_D + 20.0 = 0\nLaTeX: \\[ 0.538 I_D^2 - 7.56 I_D + 20 = 0 \\]"),
    ("Aplicación de la fórmula cuadrática general:", "\nI_D = [ 7.56 ± √(7.56² - 4(0.538)(20)) ] / [2(0.538)]\nI_D = [ 7.56 ± √(57.15 - 43.04) ] / 1.076\nI_D = [ 7.56 ± √14.11 ] / 1.076 = [ 7.56 ± 3.756 ] / 1.076"),
    ("Dos raíces matemáticas obtenidas:", "\nI_D1 = 10.52 / 1.076 = 7.15 mA\nI_D2 = 4.10 / 1.076 = 3.22 mA")
]
for t, d in steps_q:
    p = tf12_l.add_paragraph()
    p.text = f"• {t}{d}"
    p.font.size = Pt(9.5)
    p.font.color.rgb = LIGHT_TEXT

# Right Card: Physical selection and verification
c12_r = add_card(s12, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4), border_color=GREEN_ACCENT)
tb12_r = s12.shapes.add_textbox(Inches(7.0), Inches(1.7), Inches(5.3), Inches(5.0))
tf12_r = tb12_r.text_frame
tf12_r.word_wrap = True

pt12_2 = tf12_r.paragraphs[0]
pt12_2.text = "PASO 5 Y 6: DESCARTE Y COMPROBACIÓN"
pt12_2.font.bold = True
pt12_2.font.size = Pt(14)
pt12_2.font.color.rgb = GREEN_ACCENT

steps_chk = [
    ("¿Cuál raíz se descarta y por qué razón física?", "\nSi evaluamos I_D1 = 7.15 mA:\nV_GS = 7.50 - 7.15 · (0.82) = 1.64 V\nPero V_GS(th) = 2.5 V. Como 1.64 V < 2.5 V, el transistor estaría en CORTE (I_D = 0), contradiciendo el valor de 7.15 mA. ¡Se descarta!"),
    ("Raíz física legítima aceptada:", "\nI_DQ = 3.22 mA\nV_GSQ = 7.50 - 3.22 · (0.82) = 4.86 V\nComo 4.86 V > 2.5 V, ¡es físicamente consistente!"),
    ("Cálculo del voltaje V_DSQ:", "\nV_DSQ = V_DD - I_DQ · (R_D + R_S)\nV_DSQ = 24 V - 3.22 mA · (1.8 kΩ + 0.82 kΩ)\nV_DSQ = 24 V - 3.22 · (2.62) = 24 - 8.44 = 15.56 V"),
    ("Comprobación final obligatoria de Saturación:", "\nV_DS(sat) = V_GSQ - V_GS(th) = 4.86 V - 2.5 V = 2.36 V\nComo V_DSQ (15.56 V) ≥ V_DS(sat) (2.36 V):\n¡EL TRANSISTOR OPERA EN SATURACIÓN AL 100%!")
]
for t, d in steps_chk:
    p = tf12_r.add_paragraph()
    p.text = f"• {t}{d}"
    p.font.size = Pt(9.5)
    p.font.color.rgb = LIGHT_TEXT if not "SATURACIÓN" in d else GREEN_ACCENT

add_speaker_notes(s12, "Enseñar el criterio de descarte: Las matemáticas dan dos raíces, pero la física solo admite una. La regla de oro es: Calcule V_GS con cada raíz; aquella que dé menor que V_GS(th) es ficticia y se descarta de inmediato.")

# ==========================================
# SLIDE 13: REALIMENTACIÓN DE DRENADOR
# ==========================================
s13 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s13, "12. Polarización por Realimentación de Drenador (Drain-Feedback)", "ESTABILIZACIÓN POR RETROALIMENTACIÓN")

c13_l = add_card(s13, Inches(0.8), Inches(1.6), Inches(5.6), Inches(5.3), border_color=CARD_BORDER)
tb13_l = s13.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.2), Inches(4.8))
tf13_l = tb13_l.text_frame
tf13_l.word_wrap = True

p13_1 = tf13_l.paragraphs[0]
p13_1.text = "CONFIGURACIÓN CIRCUITAL"
p13_1.font.bold = True
p13_1.font.size = Pt(15)
p13_1.font.color.rgb = GOLD_ACCENT

items_df = [
    ("Conexión:", "Se conecta una resistencia muy alta R_G (ej. 10 MΩ) directamente entre el drenador y la compuerta."),
    ("Caída en R_G:", "Dado que I_G = 0 A, la caída de tensión en R_G es exactamente cero: V_RG = I_G · R_G = 0 V."),
    ("Consecuencia directa:", "El potencial de compuerta queda amarrado al potencial de drenador:"),
    ("Ecuación maestra:", "V_GS = V_DS\nLaTeX: \\[ V_{GS} = V_{DS} \\]"),
    ("Ahorro de componentes:", "Elimina la necesidad de R_1, R_2 y desacopla la fuente, estabilizando el punto Q ante temperatura.")
]
for t, d in items_df:
    p = tf13_l.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

c13_r = add_card(s13, Inches(6.8), Inches(1.6), Inches(5.7), Inches(5.3), border_color=GREEN_ACCENT)
tb13_r = s13.shapes.add_textbox(Inches(7.0), Inches(1.8), Inches(5.3), Inches(4.8))
tf13_r = tb13_r.text_frame
tf13_r.word_wrap = True

p13_2 = tf13_r.paragraphs[0]
p13_2.text = "TEOREMA: SATURACIÓN GARANTIZADA"
p13_2.font.bold = True
p13_2.font.size = Pt(15)
p13_2.font.color.rgb = GREEN_ACCENT

p = tf13_r.add_paragraph()
p.text = "¿Puede este circuito entrar en región óhmica?\n¡La respuesta matemática es NUNCA!"
p.font.bold = True
p.font.size = Pt(12)
p.font.color.rgb = WHITE

proof_items = [
    ("Condición para saturación:", "V_DS ≥ V_GS - V_GS(th)"),
    ("Sustituyendo V_GS = V_DS:", "V_DS ≥ V_DS - V_GS(th)"),
    ("Restando V_DS en ambos lados:", "0 ≥ - V_GS(th)   <===>   V_GS(th) ≥ 0"),
    ("Conclusión matemática:", "Como en todo E-MOSFET de canal N el voltaje umbral V_GS(th) es estrictamente positivo (> 0), ¡la condición de saturación se satisface de forma automática e incondicional!"),
    ("Ventaja para amplificación:", "Es imposible que el diseñador cometa un error y saque el transistor de su zona activa al amplificar.")
]
for t, d in proof_items:
    p = tf13_r.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s13, "Esta demostración matemática le encanta a los estudiantes porque demuestra la elegancia del análisis circuital: simplemente con conectar R_G entre Drenador y Compuerta, el circuito garantiza por sí mismo que el punto Q esté siempre en saturación.")

# ==========================================
# SLIDE 14: CASO INDUSTRIAL: DRIVER DE POTENCIA
# ==========================================
s14 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s14, "13. Aplicación Industrial: Driver de Potencia (Low-Side Switch)", "PROYECTOS Y CASOS REALES")

# Image on Left
img_path14 = "./diagrama_driver_potencia.png"
if os.path.exists(img_path14):
    s14.shapes.add_picture(img_path14, Inches(0.8), Inches(1.5), width=Inches(7.3))

# Explanatory card on Right
c14 = add_card(s14, Inches(8.3), Inches(1.5), Inches(4.2), Inches(5.4), border_color=CARD_BORDER)
tb14 = s14.shapes.add_textbox(Inches(8.5), Inches(1.7), Inches(3.8), Inches(5.0))
tf14 = tb14.text_frame
tf14.word_wrap = True

p14_1 = tf14.paragraphs[0]
p14_1.text = "DISEÑO DEL CIRCUITO REAL"
p14_1.font.bold = True
p14_1.font.size = Pt(14)
p14_1.font.color.rgb = GOLD_ACCENT

driver_items = [
    ("1. MOSFET Logic-Level (IRLZ44N):", "Un MOSFET convencional (IRF540) necesita V_GS = 10 V para encender del todo. Con 3.3 V de un ESP32 disiparía calor excesivo y se quemaría. ¡Los Logic-Level operan con 3.3V y 5V!"),
    ("2. Diodo Flyback (1N5822):", "Toda carga inductiva (motor, relé) genera un pico de tensión destructor -L(di/dt) al apagarse. El diodo recircula esa corriente protegiendo el Drenador."),
    ("3. Resistencia Serie R_G (100 Ω):", "Amortigua el pico de corriente de carga de la capacitancia parásita de compuerta C_iss, protegiendo el pin del micro."),
    ("4. Resistencia Pull-Down R_PD (100 kΩ):", "Fija la compuerta a 0 V durante el arranque del microcontrolador cuando los pines están en alta impedancia.")
]
for t, d in driver_items:
    p = tf14.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(10)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s14, "Este es el caso que salva proyectos de grado y concursos de robótica: Muchos estudiantes conectan un motor a un microcontrolador usando un IRF540N y dicen 'profesor, el transistor no sirve, calienta demasiado'. La razón es que el IRF540N no es Logic-Level. Con 3.3V apenas entra en la zona lineal. Usar siempre IRLZ44N.")

# ==========================================
# SLIDE 15: EFICIENCIA TÉRMICA Y R_DS(on)
# ==========================================
s15 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s15, "14. Eficiencia Térmica en Conmutación: BJT vs MOSFET", "ELECTRÓNICA DE POTENCIA")

c15_l = add_card(s15, Inches(0.8), Inches(1.6), Inches(5.6), Inches(5.3), border_color=RED_ACCENT)
tb15_l = s15.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.2), Inches(4.8))
tf15_l = tb15_l.text_frame
tf15_l.word_wrap = True

pt15_1 = tf15_l.paragraphs[0]
pt15_1.text = "BJT DE POTENCIA (Ej. TIP35C a 10 A)"
pt15_1.font.bold = True
pt15_1.font.size = Pt(15)
pt15_1.font.color.rgb = RED_ACCENT

items_tbjt = [
    ("Caída de saturación:", "V_CE(sat) ≈ 1.2 V constante."),
    ("Pérdidas de conducción:", "P_cond = I_C · V_CE(sat) = 10 A · 1.2 V = 12 Watts."),
    ("Requerimiento térmico:", "Disipador de aluminio masivo (R_th < 5 °C/W) y ventilador forzado."),
    ("Pérdida en la base:", "Con β = 20, requiere I_B = 0.5 A continuos entregados por la fuente de control."),
    ("Riesgo:", "Hot-spotting y embalamiento térmico en paralelo.")
]
for t, d in items_tbjt:
    p = tf15_l.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

c15_r = add_card(s15, Inches(6.8), Inches(1.6), Inches(5.7), Inches(5.3), border_color=GREEN_ACCENT)
tb15_r = s15.shapes.add_textbox(Inches(7.0), Inches(1.8), Inches(5.3), Inches(4.8))
tf15_r = tb15_r.text_frame
tf15_r.word_wrap = True

pt15_2 = tf15_r.paragraphs[0]
pt15_2.text = "MOSFET DE POTENCIA (Ej. IPP015N04N a 10 A)"
pt15_2.font.bold = True
pt15_2.font.size = Pt(15)
pt15_2.font.color.rgb = GREEN_ACCENT

items_tmos = [
    ("Resistencia en conducción:", "R_DS(on) = 1.5 mΩ = 0.0015 Ω."),
    ("Pérdidas de conducción:", "P_cond = I_D² · R_DS(on) = (10 A)² · 0.0015 Ω = 0.15 Watts!"),
    ("Requerimiento térmico:", "¡No necesita disipador! Disipa el calor por las pistas de cobre de la PCB."),
    ("Pérdida en la compuerta:", "Cero en estado estacionario (I_G = 0 A)."),
    ("Ventaja en paralelo:", "R_DS(on) sube con la temperatura, repartiendo automáticamente la corriente entre transistores.")
]
for t, d in items_tmos:
    p = tf15_r.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

add_speaker_notes(s15, "La comparación entre 12 Watts y 0.15 Watts habla por sí sola: es una reducción de casi 100 veces en disipación de calor. Esta es la razón de ingeniería pura por la cual los autos eléctricos de Tesla o BYD usan inversores basados en MOSFETs y módulos de SiC.")

# ==========================================
# SLIDE 16: TALLER RETO Y CONCLUSIONES
# ==========================================
s16 = prs.slides.add_slide(prs.slide_layouts[6])
apply_itm_slide_base(s16, "15. Taller Reto de Laboratorio y Conclusiones de Clase", "EVALUACIÓN FORMATIVA Y CIERRE")

# Left Card: Challenge
c16_l = add_card(s16, Inches(0.8), Inches(1.6), Inches(5.6), Inches(5.3), border_color=GOLD_ACCENT)
tb16_l = s16.shapes.add_textbox(Inches(1.0), Inches(1.8), Inches(5.2), Inches(4.8))
tf16_l = tb16_l.text_frame
tf16_l.word_wrap = True

p16_1 = tf16_l.paragraphs[0]
p16_1.text = "TALLER RETO PARA EL LABORATORIO ITM"
p16_1.font.bold = True
p16_1.font.size = Pt(15)
p16_1.font.color.rgb = GOLD_ACCENT

p = tf16_l.add_paragraph()
p.text = "Enunciado del problema de diseño:"
p.font.bold = True
p.font.size = Pt(12)
p.font.color.rgb = WHITE

challenge_items = [
    ("Objetivo:", "Diseñar un controlador de intensidad luminosa (PWM) para una tira LED de 12 V / 3 A usando un ESP32 (salida 3.3 V)."),
    ("Tareas a entregar:", "\n1. Seleccionar entre el 2N7000, IRF540N e IRLZ44N justificando con la hoja de datos.\n2. Calcular el valor de la resistencia de compuerta R_G para una frecuencia PWM de 20 kHz sabiendo que C_iss = 1700 pF.\n3. Calcular la disipación térmica y verificar si se requiere disipador.\n4. Simular en LTspice / Proteus y verificar la forma de onda de conmutación.")
]
for t, d in challenge_items:
    p = tf16_l.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = LIGHT_TEXT

# Right Card: 3 Golden Rules & Q&A
c16_r = add_card(s16, Inches(6.8), Inches(1.6), Inches(5.7), Inches(5.3), border_color=CARD_BORDER)
tb16_r = s16.shapes.add_textbox(Inches(7.0), Inches(1.8), Inches(5.3), Inches(4.8))
tf16_r = tb16_r.text_frame
tf16_r.word_wrap = True

p16_2 = tf16_r.paragraphs[0]
p16_2.text = "3 REGLAS DE ORO PARA EL INGENIERO ITM"
p16_2.font.bold = True
p16_2.font.size = Pt(15)
p16_2.font.color.rgb = CARD_BORDER

rules = [
    ("1. El Voltaje Manda:", "La compuerta no consume corriente (I_G = 0 A); todo se controla por campo eléctrico (V_GS)."),
    ("2. Conozca su Región:", "Para amplificar linealmente opere en SATURACIÓN (V_DS ≥ V_GS - V_th). Para conmutar cargas con mínima pérdida opere en ÓHMICA (V_DS mínimo, R_DS(on) mínimo)."),
    ("3. Respete el Óxido:", "El SiO2 es nanométrico. Proteja siempre contra descargas electrostáticas (ESD) y picos de sobretensión inductiva.")
]
for t, d in rules:
    p = tf16_r.add_paragraph()
    p.text = f"• {t} {d}"
    p.font.size = Pt(11)
    p.font.color.rgb = WHITE

p_end = tf16_r.add_paragraph()
p_end.text = "\n¿Preguntas, dudas o inquietudes sobre el taller?\n¡Nos vemos en el banco de laboratorio!"
p_end.font.bold = True
p_end.font.size = Pt(13)
p_end.font.color.rgb = GOLD_ACCENT

add_speaker_notes(s16, "Cierre de la sesión. Motivar a los grupos a revisar las hojas de datos de los tres componentes sugeridos para el taller reto antes de entrar al laboratorio.")

# Save presentation
prs.save(OUTPUT_PATH)
print(f"Presentation generated successfully at: {OUTPUT_PATH}")

