import math
from PIL import Image, ImageDraw, ImageFont

def get_font(size):
    # Try standard system fonts or default
    try:
        return ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", size)
    except:
        try:
            return ImageFont.truetype("/System/Library/Fonts/SFNSText.ttf", size)
        except:
            return ImageFont.load_default()

def create_curves_diagram():
    # 1200 x 600 high res
    w, h = 1200, 600
    img = Image.new("RGB", (w, h), color=(14, 27, 54))
    draw = ImageDraw.Draw(img)
    
    font_title = get_font(24)
    font_label = get_font(18)
    font_sub = get_font(15)
    
    # Outer border / frame
    draw.rounded_rectangle([15, 15, w-15, h-15], radius=16, outline=(0, 192, 243), width=2)
    
    # Title
    draw.text((w//2 - 280, 28), "CURVAS CARACTERÍSTICAS DUALES: E-MOSFET CANAL N", fill=(255, 255, 255), font=font_title)
    
    # Left Plot: Transfer Characteristic (ID vs VGS)
    ox1, oy1 = 120, 480
    ax_w1, ax_h1 = 380, 360
    
    # Axes
    draw.line([ox1, oy1, ox1 + ax_w1, oy1], fill=(200, 210, 230), width=3) # VGS axis
    draw.line([ox1, oy1, ox1, oy1 - ax_h1], fill=(200, 210, 230), width=3) # ID axis
    
    # Arrows
    draw.polygon([(ox1 + ax_w1 + 10, oy1), (ox1 + ax_w1, oy1 - 6), (ox1 + ax_w1, oy1 + 6)], fill=(200, 210, 230))
    draw.polygon([(ox1, oy1 - ax_h1 - 10), (ox1 - 6, oy1 - ax_h1), (ox1 + 6, oy1 - ax_h1)], fill=(200, 210, 230))
    
    draw.text((ox1 + ax_w1 - 40, oy1 + 15), "V_GS (V)", fill=(0, 192, 243), font=font_label)
    draw.text((ox1 - 70, oy1 - ax_h1 - 5), "I_D (mA)", fill=(0, 192, 243), font=font_label)
    draw.text((ox1 + 40, oy1 - ax_h1 + 20), "Curva de Transferencia", fill=(255, 215, 0), font=font_label)
    draw.text((ox1 + 40, oy1 - ax_h1 + 45), "I_D = k (V_GS - V_GS(th))^2", fill=(180, 200, 220), font=font_sub)
    
    # VGS(th) marker
    vth_x = ox1 + 120
    draw.line([vth_x, oy1 - 8, vth_x, oy1 + 8], fill=(255, 180, 0), width=3)
    draw.text((vth_x - 30, oy1 + 12), "V_GS(th)", fill=(255, 180, 0), font=font_label)
    
    # Transfer curve (starts at vth_x)
    curve_pts = []
    for px in range(vth_x, ox1 + ax_w1):
        norm = (px - vth_x) / (ax_w1 - 120)
        curr = norm ** 2
        py = oy1 - int(curr * (ax_h1 - 50))
        curve_pts.append((px, py))
    if len(curve_pts) > 1:
        draw.line(curve_pts, fill=(0, 220, 255), width=4)
        
    # Cutoff label
    draw.text((ox1 + 25, oy1 - 35), "Corte: I_D = 0", fill=(255, 100, 100), font=font_sub)
    
    # Right Plot: Output Characteristics (ID vs VDS)
    ox2, oy2 = 640, 480
    ax_w2, ax_h2 = 480, 360
    
    draw.line([ox2, oy2, ox2 + ax_w2, oy2], fill=(200, 210, 230), width=3) # VDS axis
    draw.line([ox2, oy2, ox2, oy2 - ax_h2], fill=(200, 210, 230), width=3) # ID axis
    
    draw.polygon([(ox2 + ax_w2 + 10, oy2), (ox2 + ax_w2, oy2 - 6), (ox2 + ax_w2, oy2 + 6)], fill=(200, 210, 230))
    draw.polygon([(ox2, oy2 - ax_h2 - 10), (ox2 - 6, oy2 - ax_h2), (ox2 + 6, oy2 - ax_h2)], fill=(200, 210, 230))
    
    draw.text((ox2 + ax_w2 - 40, oy2 + 15), "V_DS (V)", fill=(0, 192, 243), font=font_label)
    draw.text((ox2 - 70, oy2 - ax_h2 - 5), "I_D (mA)", fill=(0, 192, 243), font=font_label)
    draw.text((ox2 + 60, oy2 - ax_h2 + 20), "Curvas de Drenaje (Salida)", fill=(255, 215, 0), font=font_label)
    
    # Regions shading / lines
    # Pinch-off boundary parabola: VDS_sat = VGS - Vth
    pinch_pts = []
    levels = [0.3, 0.55, 0.8, 1.0] # different VGS levels
    vgs_labels = ["V_GS = 3V", "V_GS = 4V", "V_GS = 5V", "V_GS = 6V (V_GS4 > V_GS3...)"]
    
    for i, lvl in enumerate(levels):
        target_y = oy2 - int(lvl * (ax_h2 - 60))
        sat_x = ox2 + int((lvl ** 0.5) * 160)
        pinch_pts.append((sat_x, target_y))
        
        # Triode curve from (ox2, oy2) to (sat_x, target_y)
        triode_pts = []
        steps = 40
        for s in range(steps + 1):
            t = s / steps
            cx = ox2 + int(t * (sat_x - ox2))
            # Smooth transition to saturation
            cy = oy2 - int((2*t - t*t) * (oy2 - target_y))
            triode_pts.append((cx, cy))
        draw.line(triode_pts, fill=(100, 200, 255), width=3)
        
        # Saturation line from sat_x to ox2 + ax_w2
        draw.line([sat_x, target_y, ox2 + ax_w2 - 20, target_y], fill=(100, 200, 255), width=3)
        draw.text((ox2 + ax_w2 - 10, target_y - 10), vgs_labels[i], fill=(230, 240, 255), font=font_sub)
        
    # Draw pinch-off boundary dashed line
    pinch_pts_smooth = [(ox2, oy2)] + pinch_pts
    draw.line(pinch_pts_smooth, fill=(255, 180, 0), width=3)
    
    # Labels for regions
    draw.text((ox2 + 40, oy2 - 120), "REGIÓN ÓHMICA / TRIODO\n(V_DS < V_GS - V_th)\nComportamiento como R_DS(on)", fill=(120, 255, 180), font=font_sub)
    draw.text((ox2 + 200, oy2 - 280), "REGIÓN DE SATURACIÓN / ACTIVA\n(V_DS >= V_GS - V_th)\nFuente de corriente controlada\nI_D = k(V_GS - V_th)^2", fill=(255, 220, 100), font=font_sub)
    
    # Label for pinch-off boundary
    draw.text((ox2 + 70, oy2 - ax_h2 + 50), "---> Límite de Estrangulamiento: V_DS(sat) = V_GS - V_GS(th)", fill=(255, 180, 0), font=font_sub)
    
    img.save("./diagrama_curvas_mosfet.png", "PNG")
    print("diagrama_curvas_mosfet.png created successfully")

create_curves_diagram()

def create_physical_structure():
    w, h = 1000, 520
    img = Image.new("RGB", (w, h), color=(14, 27, 54))
    draw = ImageDraw.Draw(img)
    
    font_title = get_font(22)
    font_label = get_font(18)
    font_sub = get_font(14)
    font_alert = get_font(13)
    
    draw.rounded_rectangle([15, 15, w-15, h-15], radius=16, outline=(0, 192, 243), width=2)
    draw.text((w//2 - 250, 25), "ESTRUCTURA FÍSICA Y CAPA DE INVERSIÓN (E-MOSFET)", fill=(255, 255, 255), font=font_title)
    
    # Substrate box (P-type)
    sx1, sy1 = 120, 240
    sx2, sy2 = 880, 440
    draw.rectangle([sx1, sy1, sx2, sy2], fill=(40, 60, 95), outline=(100, 140, 190), width=2)
    draw.text((sx1 + 320, sy2 - 40), "Sustrato de Silicio Tipo P (Huecos mayoritarios)", fill=(200, 220, 255), font=font_label)
    
    # Source N+ well
    nx1, ny1 = sx1 + 50, sy1
    nx2, ny2 = nx1 + 130, sy1 + 100
    draw.rectangle([nx1, ny1, nx2, ny2], fill=(0, 130, 200), outline=(0, 210, 255), width=2)
    draw.text((nx1 + 35, ny1 + 35), "N +", fill=(255, 255, 255), font=font_label)
    draw.text((nx1 + 20, ny1 + 65), "Fuente (S)", fill=(255, 255, 200), font=font_sub)
    
    # Drain N+ well
    dx1, dy1 = sx2 - 180, sy1
    dx2, dy2 = sx2 - 50, sy1 + 100
    draw.rectangle([dx1, dy1, dx2, dy2], fill=(0, 130, 200), outline=(0, 210, 255), width=2)
    draw.text((dx1 + 35, dy1 + 35), "N +", fill=(255, 255, 255), font=font_label)
    draw.text((dx1 + 15, dy1 + 65), "Drenador (D)", fill=(255, 255, 200), font=font_sub)
    
    # Inversion Channel (between Source and Drain)
    cx1 = nx2
    cx2 = dx1
    cy1 = sy1
    cy2 = sy1 + 25
    draw.rectangle([cx1, cy1, cx2, cy2], fill=(0, 220, 180), outline=(255, 255, 255), width=1)
    draw.text((cx1 + 80, cy1 + 5), "Canal N Inducido (Capa de Inversión)", fill=(10, 30, 60), font=font_sub)
    
    # SiO2 Oxide Dielectric Layer
    ox_y1 = sy1 - 25
    ox_y2 = sy1
    draw.rectangle([cx1 - 20, ox_y1, cx2 + 20, ox_y2], fill=(230, 180, 80), outline=(255, 210, 120), width=1)
    draw.text((cx1 + 110, ox_y1 + 4), "Dieléctrico SiO2 (Óxido aislante, grosor < 100 nm)", fill=(15, 25, 45), font=font_sub)
    
    # Gate electrode (Metal / Polysilicon)
    gx1 = cx1
    gx2 = cx2
    gy1 = ox_y1 - 30
    gy2 = ox_y1
    draw.rectangle([gx1, gy1, gx2, gy2], fill=(160, 175, 195), outline=(230, 240, 255), width=2)
    draw.text((gx1 + 140, gy1 + 6), "Compuerta (Gate - G)", fill=(10, 20, 40), font=font_label)
    
    # Gate Terminal Lead
    draw.line([(gx1 + gx2)//2, gy1, (gx1 + gx2)//2, gy1 - 40], fill=(255, 255, 255), width=3)
    draw.text(((gx1 + gx2)//2 - 60, gy1 - 65), "Terminal G (+ V_GS)", fill=(255, 215, 0), font=font_label)
    
    # Source & Drain Leads
    draw.line([(nx1 + nx2)//2, ny1, (nx1 + nx2)//2, ny1 - 60], fill=(255, 255, 255), width=3)
    draw.text(((nx1 + nx2)//2 - 40, ny1 - 85), "Terminal S (0V)", fill=(200, 230, 255), font=font_sub)
    
    draw.line([(dx1 + dx2)//2, dy1, (dx1 + dx2)//2, dy1 - 60], fill=(255, 255, 255), width=3)
    draw.text(((dx1 + dx2)//2 - 45, dy1 - 85), "Terminal D (+V_DS)", fill=(200, 230, 255), font=font_sub)
    
    # Electric Field Arrows
    for fx in range(cx1 + 40, cx2 - 30, 50):
        draw.line([fx, gy2, fx, cy1], fill=(255, 80, 80), width=2)
        draw.polygon([(fx, cy1), (fx - 4, cy1 - 7), (fx + 4, cy1 - 7)], fill=(255, 80, 80))
    draw.text((cx2 + 30, gy1 + 5), "Campo Eléctrico E\n(Atrae e- hacia la superficie)", fill=(255, 120, 120), font=font_sub)
    
    # ESD Alert box at bottom
    draw.rounded_rectangle([120, 455, 880, 500], radius=8, fill=(60, 20, 25), outline=(255, 90, 95), width=1)
    draw.text((140, 467), "ALERTA INDUSTRIAL DE MALVINO (ESD): El óxido de SiO2 es ultra-fino. La estática humana (>2000V) perfora", fill=(255, 180, 180), font=font_alert)
    draw.text((140, 483), "irreversiblemente este dieléctrico (E > 10^7 V/cm). ¡Manejar con manilla antiestática en laboratorio!", fill=(255, 220, 220), font=font_alert)
    
    img.save("./diagrama_estructura_fisica.png", "PNG")
    print("diagrama_estructura_fisica.png created successfully")

create_physical_structure()

def create_voltage_divider_circuit():
    w, h = 900, 540
    img = Image.new("RGB", (w, h), color=(14, 27, 54))
    draw = ImageDraw.Draw(img)
    
    font_title = get_font(22)
    font_label = get_font(18)
    font_sub = get_font(14)
    font_box = get_font(15)
    
    draw.rounded_rectangle([15, 15, w-15, h-15], radius=16, outline=(0, 192, 243), width=2)
    draw.text((w//2 - 270, 25), "CIRCUITO: POLARIZACIÓN POR DIVISOR DE VOLTAJE", fill=(255, 255, 255), font=font_title)
    
    # Left: Circuit schematic
    # VDD top rail
    draw.line([120, 90, 480, 90], fill=(255, 255, 255), width=3)
    draw.text((260, 60), "+ V_DD = 24 V", fill=(255, 215, 0), font=font_label)
    
    # Ground rail
    draw.line([120, 460, 480, 460], fill=(255, 255, 255), width=3)
    # Ground symbols
    draw.line([300, 460, 300, 475], fill=(255, 255, 255), width=2)
    draw.line([290, 475, 310, 475], fill=(255, 255, 255), width=2)
    draw.line([294, 480, 306, 480], fill=(255, 255, 255), width=2)
    draw.line([298, 485, 302, 485], fill=(255, 255, 255), width=2)
    
    # Gate divider branch (R1, R2) at x = 180
    gx = 180
    draw.line([gx, 90, gx, 140], fill=(255, 255, 255), width=2)
    # R1 box
    draw.rectangle([gx - 18, 140, gx + 18, 200], fill=(30, 50, 80), outline=(0, 192, 243), width=2)
    draw.text((gx - 75, 160), "R1 = 22M", fill=(220, 230, 255), font=font_sub)
    draw.line([gx, 200, gx, 310], fill=(255, 255, 255), width=2)
    # R2 box
    draw.rectangle([gx - 18, 310, gx + 18, 370], fill=(30, 50, 80), outline=(0, 192, 243), width=2)
    draw.text((gx - 75, 330), "R2 = 10M", fill=(220, 230, 255), font=font_sub)
    draw.line([gx, 370, gx, 460], fill=(255, 255, 255), width=2)
    
    # Gate tap at y = 255
    gy = 255
    draw.ellipse([gx - 4, gy - 4, gx + 4, gy + 4], fill=(255, 215, 0))
    draw.text((gx + 10, gy - 20), "V_G = 7.50 V", fill=(255, 215, 0), font=font_sub)
    draw.line([gx, gy, 340, gy], fill=(255, 255, 255), width=2)
    draw.text((240, gy + 8), "I_G = 0 A", fill=(100, 255, 150), font=font_sub)
    
    # Drain & Source branch at x = 400
    dx = 400
    draw.line([dx, 90, dx, 130], fill=(255, 255, 255), width=2)
    # RD box
    draw.rectangle([dx - 18, 130, dx + 18, 190], fill=(30, 50, 80), outline=(0, 192, 243), width=2)
    draw.text((dx + 25, 150), "R_D = 1.8 kΩ", fill=(220, 230, 255), font=font_sub)
    draw.line([dx, 190, dx, 220], fill=(255, 255, 255), width=2)
    
    # MOSFET Symbol at center (370, 255)
    # Gate line
    draw.line([340, 240, 340, 270], fill=(255, 255, 255), width=3) # Gate bar
    # Channel bars (broken line for E-MOSFET)
    draw.line([355, 220, 355, 232], fill=(0, 220, 255), width=3)
    draw.line([355, 248, 355, 262], fill=(0, 220, 255), width=3)
    draw.line([355, 278, 355, 290], fill=(0, 220, 255), width=3)
    
    # Drain connector
    draw.line([355, 226, dx, 226], fill=(255, 255, 255), width=2)
    draw.line([dx, 226, dx, 220], fill=(255, 255, 255), width=2)
    draw.text((dx + 8, 218), "D", fill=(255, 215, 0), font=font_sub)
    
    # Source connector with arrow
    draw.line([355, 284, dx, 284], fill=(255, 255, 255), width=2)
    draw.text((dx + 8, 284), "S", fill=(255, 215, 0), font=font_sub)
    # Inward arrow on center substrate line
    draw.line([355, 255, dx, 255], fill=(255, 255, 255), width=2)
    draw.polygon([(360, 255), (370, 250), (370, 260)], fill=(0, 220, 255))
    draw.line([dx, 255, dx, 284], fill=(255, 255, 255), width=2)
    
    # RS box
    draw.line([dx, 284, dx, 320], fill=(255, 255, 255), width=2)
    draw.rectangle([dx - 18, 320, dx + 18, 380], fill=(30, 50, 80), outline=(0, 192, 243), width=2)
    draw.text((dx + 25, 345), "R_S = 820 Ω", fill=(220, 230, 255), font=font_sub)
    draw.line([dx, 380, dx, 460], fill=(255, 255, 255), width=2)
    
    # Right: Results summary card
    rx1, ry1 = 510, 80
    rx2, ry2 = 860, 480
    draw.rounded_rectangle([rx1, ry1, rx2, ry2], radius=12, fill=(20, 40, 75), outline=(0, 210, 255), width=2)
    draw.text((rx1 + 35, ry1 + 20), "RESULTADOS DEL PUNTO Q", fill=(255, 215, 0), font=font_label)
    
    results = [
        ("Constante k:", "0.80 mA/V^2"),
        ("Voltaje Compuerta VG:", "7.50 V (exacto, IG=0)"),
        ("Malla VGS:", "VGS = 7.50 - 0.82 ID"),
        ("Ecuación Cuadrática:", "0.538 ID^2 - 7.56 ID + 20 = 0"),
        ("Raíces calculadas:", "ID1 = 7.15 mA | ID2 = 3.22 mA"),
        ("Raíz Física Real:", "IDQ = 3.22 mA"),
        ("Voltaje VGSQ:", "4.86 V (> V_th = 2.5V)"),
        ("Voltaje VDSQ:", "15.56 V"),
        ("Límite Estrangulamiento:", "VDS(sat) = 2.36 V"),
        ("Comprobación:", "15.56V >= 2.36V  --> SATURACIÓN")
    ]
    
    for idx, (lbl, val) in enumerate(results):
        py = ry1 + 65 + idx * 36
        draw.text((rx1 + 15, py), lbl, fill=(180, 210, 240), font=font_sub)
        col = (100, 255, 150) if "SATURACIÓN" in val or "3.22" in val else (255, 255, 255)
        draw.text((rx1 + 15, py + 16), val, fill=col, font=font_box)
        
    img.save("./diagrama_divisor_tension.png", "PNG")
    print("diagrama_divisor_tension.png created successfully")

create_voltage_divider_circuit()

def create_power_driver():
    w, h = 1000, 520
    img = Image.new("RGB", (w, h), color=(14, 27, 54))
    draw = ImageDraw.Draw(img)
    
    font_title = get_font(22)
    font_label = get_font(18)
    font_sub = get_font(14)
    font_note = get_font(13)
    
    draw.rounded_rectangle([15, 15, w-15, h-15], radius=16, outline=(0, 192, 243), width=2)
    draw.text((w//2 - 270, 25), "DRIVER DE POTENCIA INDUSTRIAL (LOW-SIDE SWITCH)", fill=(255, 255, 255), font=font_title)
    
    # Left: MCU box
    draw.rounded_rectangle([50, 150, 190, 340], radius=10, fill=(35, 55, 90), outline=(0, 210, 255), width=2)
    draw.text((70, 170), "MICRO-\nCONTROLADOR\n(ESP32 / STM32)", fill=(255, 255, 255), font=font_sub)
    draw.text((70, 250), "GPIO Digital\n0 V / 3.3 V", fill=(255, 215, 0), font=font_label)
    
    # GPIO pin
    draw.line([190, 270, 260, 270], fill=(255, 255, 255), width=3)
    
    # Series Gate Resistor RG
    draw.rectangle([260, 255, 330, 285], fill=(25, 45, 75), outline=(0, 210, 255), width=2)
    draw.text((270, 262), "R_G", fill=(255, 255, 255), font=font_sub)
    draw.text((260, 295), "100 Ω\n(Amortigua picos)", fill=(200, 220, 240), font=font_note)
    
    # Gate connection
    draw.line([330, 270, 450, 270], fill=(255, 255, 255), width=3)
    
    # Pull-down Resistor RPD to ground
    draw.ellipse([400 - 4, 270 - 4, 400 + 4, 270 + 4], fill=(255, 215, 0))
    draw.line([400, 270, 400, 330], fill=(255, 255, 255), width=2)
    draw.rectangle([385, 330, 415, 390], fill=(25, 45, 75), outline=(0, 210, 255), width=2)
    draw.text((340, 350), "R_PD\n100 kΩ", fill=(200, 220, 240), font=font_note)
    draw.line([400, 390, 400, 440], fill=(255, 255, 255), width=2)
    # Ground
    draw.line([390, 440, 410, 440], fill=(255, 255, 255), width=2)
    draw.line([394, 445, 406, 445], fill=(255, 255, 255), width=2)
    
    # E-MOSFET Symbol
    mx = 480
    draw.line([450, 250, 450, 290], fill=(255, 255, 255), width=4) # Gate
    draw.line([465, 235, 465, 250], fill=(0, 220, 255), width=3)
    draw.line([465, 263, 465, 277], fill=(0, 220, 255), width=3)
    draw.line([465, 290, 465, 305], fill=(0, 220, 255), width=3)
    
    # Drain & Source
    draw.line([465, 242, 520, 242], fill=(255, 255, 255), width=2)
    draw.line([520, 242, 520, 230], fill=(255, 255, 255), width=2)
    draw.text((530, 245), "IRLZ44N (Logic-Level)\nR_DS(on) = 28 mΩ", fill=(100, 255, 150), font=font_sub)
    
    draw.line([465, 298, 520, 298], fill=(255, 255, 255), width=2)
    draw.line([520, 298, 520, 440], fill=(255, 255, 255), width=2) # Source to ground
    draw.line([510, 440, 530, 440], fill=(255, 255, 255), width=2)
    draw.line([514, 445, 526, 445], fill=(255, 255, 255), width=2)
    
    # Inductive Load (Motor / Relay) + Flyback Diode
    draw.line([520, 230, 520, 180], fill=(255, 255, 255), width=2)
    
    # Top +24V power rail
    draw.line([500, 90, 720, 90], fill=(255, 255, 255), width=3)
    draw.text((560, 60), "+ 24 V (Alimentación Motor)", fill=(255, 215, 0), font=font_label)
    
    # Load Box (Motor DC)
    draw.rounded_rectangle([480, 110, 560, 170], radius=8, fill=(200, 90, 40), outline=(255, 200, 100), width=2)
    draw.text((495, 125), "MOTOR\nDC 24V\n(4 A)", fill=(255, 255, 255), font=font_sub)
    draw.line([520, 90, 520, 110], fill=(255, 255, 255), width=2)
    
    # Parallel Flyback Diode Branch
    draw.line([520, 100, 650, 100], fill=(255, 255, 255), width=2)
    draw.line([650, 100, 650, 125], fill=(255, 255, 255), width=2)
    # Diode symbol (pointing UP: cathode at +24V, anode at drain)
    draw.polygon([(650, 130), (635, 155), (665, 155)], fill=(255, 255, 255))
    draw.line([635, 130, 665, 130], fill=(255, 255, 255), width=3) # cathode bar
    draw.line([650, 155, 650, 180], fill=(255, 255, 255), width=2)
    draw.line([650, 180, 520, 180], fill=(255, 255, 255), width=2)
    draw.text((665, 135), "Diodo Flyback (1N5822)\nProtección contra -L(di/dt)", fill=(255, 180, 80), font=font_note)
    
    # Explanatory Callouts on Right
    cx = 700
    draw.rounded_rectangle([cx, 220, 970, 470], radius=10, fill=(20, 40, 70), outline=(0, 210, 255), width=2)
    draw.text((cx + 15, 235), "4 REGLAS DE ORO EN INDUSTRIA:", fill=(255, 215, 0), font=font_sub)
    rules = [
        "1. Logic-Level Obligatorio:",
        "   V_GS(th) bajo para saturar a 3.3V.",
        "2. Diodo Flyback Antiparalelo:",
        "   Elimina chispazo inducido destructor.",
        "3. Resistencia Pull-Down R_PD:",
        "   Fija compuerta a 0V al arrancar MCU.",
        "4. Pérdidas por conducción bajas:",
        "   P = (4A)^2 * 0.028Ω = 0.45 Watts!"
    ]
    for i, r in enumerate(rules):
        col = (255, 220, 120) if r.startswith("   P =") or r.startswith("1.") or r.startswith("2.") or r.startswith("3.") or r.startswith("4.") else (200, 225, 250)
        draw.text((cx + 15, 265 + i * 22), r, fill=col, font=font_note)
        
    img.save("./diagrama_driver_potencia.png", "PNG")
    print("diagrama_driver_potencia.png created successfully")

create_power_driver()

def create_symbols_diagram():
    w, h = 1000, 480
    img = Image.new("RGB", (w, h), color=(14, 27, 54))
    draw = ImageDraw.Draw(img)
    
    font_title = get_font(22)
    font_label = get_font(17)
    font_sub = get_font(13)
    
    draw.rounded_rectangle([15, 15, w-15, h-15], radius=16, outline=(0, 192, 243), width=2)
    draw.text((w//2 - 270, 25), "SIMBOLOGÍA NORMALIZADA DE LA FAMILIA FET (IEEE / IEC)", fill=(255, 255, 255), font=font_title)
    
    # 4 columns for symbols:
    # Col 1: JFET Canal N
    # Col 2: JFET Canal P
    # Col 3: D-MOSFET Canal N
    # Col 4: E-MOSFET Canal N
    cols = [
        ("JFET Canal N", "Canal continuo\nFlecha G hacia adentro"),
        ("JFET Canal P", "Canal continuo\nFlecha G hacia afuera"),
        ("D-MOSFET Canal N", "Compuerta aislada\nCanal continuo"),
        ("E-MOSFET Canal N", "Compuerta aislada\nCanal PARTIDO (Inducido)")
    ]
    
    xs = [140, 380, 620, 860]
    
    for i, (title, desc) in enumerate(cols):
        cx = xs[i]
        draw.text((cx - 65, 80), title, fill=(255, 215, 0), font=font_label)
        draw.text((cx - 75, 110), desc, fill=(180, 210, 240), font=font_sub)
        
        # Draw frame for symbol
        draw.rounded_rectangle([cx - 95, 160, cx + 95, 420], radius=10, fill=(22, 38, 70), outline=(0, 192, 243), width=1)
        
        # Center of symbol
        sy = 290
        # Common leads: Drain (top), Source (bottom)
        draw.line([cx + 30, sy - 80, cx + 30, sy - 40], fill=(255, 255, 255), width=2)
        draw.text((cx + 35, sy - 90), "D", fill=(255, 255, 255), font=font_label)
        
        draw.line([cx + 30, sy + 40, cx + 30, sy + 80], fill=(255, 255, 255), width=2)
        draw.text((cx + 35, sy + 80), "S", fill=(255, 255, 255), font=font_label)
        
        # Gate lead (left)
        draw.line([cx - 70, sy, cx - 15, sy], fill=(255, 255, 255), width=2)
        draw.text((cx - 85, sy - 10), "G", fill=(255, 255, 255), font=font_label)
        
        if i == 0: # JFET N
            # Channel bar
            draw.line([cx + 30, sy - 40, cx + 30, sy + 40], fill=(0, 210, 255), width=5)
            # Gate arrow pointing IN
            draw.polygon([(cx + 28, sy), (cx + 8, sy - 8), (cx + 8, sy + 8)], fill=(255, 215, 0))
            draw.line([cx - 15, sy, cx + 10, sy], fill=(255, 255, 255), width=2)
            
        elif i == 1: # JFET P
            # Channel bar
            draw.line([cx + 30, sy - 40, cx + 30, sy + 40], fill=(0, 210, 255), width=5)
            # Gate arrow pointing OUT
            draw.polygon([(cx + 8, sy), (cx + 28, sy - 8), (cx + 28, sy + 8)], fill=(255, 215, 0))
            draw.line([cx - 15, sy, cx + 28, sy], fill=(255, 255, 255), width=2)
            
        elif i == 2: # D-MOSFET N
            # Gate insulated plate
            draw.line([cx - 15, sy - 40, cx - 15, sy + 40], fill=(255, 255, 255), width=4)
            # Solid channel bar
            draw.line([cx + 5, sy - 40, cx + 5, sy + 40], fill=(0, 210, 255), width=4)
            # Drain and source taps
            draw.line([cx + 5, sy - 35, cx + 30, sy - 35], fill=(255, 255, 255), width=2)
            draw.line([cx + 30, sy - 35, cx + 30, sy - 40], fill=(255, 255, 255), width=2)
            draw.line([cx + 5, sy + 35, cx + 30, sy + 35], fill=(255, 255, 255), width=2)
            draw.line([cx + 30, sy + 35, cx + 30, sy + 40], fill=(255, 255, 255), width=2)
            # Center substrate with inward arrow connected to source
            draw.line([cx + 5, sy, cx + 30, sy], fill=(255, 255, 255), width=2)
            draw.polygon([(cx + 8, sy), (cx + 22, sy - 6), (cx + 22, sy + 6)], fill=(255, 215, 0))
            draw.line([cx + 30, sy, cx + 30, sy + 35], fill=(255, 255, 255), width=2)
            
        elif i == 3: # E-MOSFET N
            # Gate insulated plate
            draw.line([cx - 15, sy - 40, cx - 15, sy + 40], fill=(255, 255, 255), width=4)
            # BROKEN channel bar (3 dashes)
            draw.line([cx + 5, sy - 40, cx + 5, sy - 18], fill=(0, 210, 255), width=4)
            draw.line([cx + 5, sy - 10, cx + 5, sy + 10], fill=(0, 210, 255), width=4)
            draw.line([cx + 5, sy + 18, cx + 5, sy + 40], fill=(0, 210, 255), width=4)
            # Drain and source taps
            draw.line([cx + 5, sy - 30, cx + 30, sy - 30], fill=(255, 255, 255), width=2)
            draw.line([cx + 30, sy - 30, cx + 30, sy - 40], fill=(255, 255, 255), width=2)
            draw.line([cx + 5, sy + 30, cx + 30, sy + 30], fill=(255, 255, 255), width=2)
            draw.line([cx + 30, sy + 30, cx + 30, sy + 40], fill=(255, 255, 255), width=2)
            # Center substrate with inward arrow connected to source
            draw.line([cx + 5, sy, cx + 30, sy], fill=(255, 255, 255), width=2)
            draw.polygon([(cx + 8, sy), (cx + 22, sy - 6), (cx + 22, sy + 6)], fill=(255, 215, 0))
            draw.line([cx + 30, sy, cx + 30, sy + 30], fill=(255, 255, 255), width=2)
            
    img.save("./diagrama_simbologia_fet.png", "PNG")
    print("diagrama_simbologia_fet.png created successfully")

create_symbols_diagram()
