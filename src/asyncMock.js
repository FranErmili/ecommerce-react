const products = [
    // {
    //     "id": "1",
    //     "nombre": "Triple Hamburguesa con Queso McCombo mediano",
    //     "precio": "1380",
    //     "ingredientes": "Hamburguesa con triple carne 100% vacuna, queso cheddar, kétchup y cebolla. Acompañada con papas fritas y bebida mediana a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26200%20McCOMBO%20TRIPLE%20HAMBURGUESA%20CON%20QUESO%20Mediano.png?1639148948743"
    // },
    // {
    //     "id": "2",
    //     "nombre": "McCombo Mediano Triple Bacon",
    //     "precio": "1900",
    //     "ingredientes": "Tres carnes, dos fetas del más rico queso cheddar, cebolla, mostaza, kétchup y bacon premium como protagonista. Con papas y gaseosa mediana",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/ComboTripleBaconMediano.png?1640861422595"
    // },
    // {
    //     "id": "3",
    //     "nombre": "McCombo Grande Triple Bacon",
    //     "precio": "2100",
    //     "ingredientes": "Tres carnes, dos fetas del más rico queso cheddar, cebolla, mostaza, kétchup y bacon premium como protagonista. Con papas y gaseosa grande",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/ComboTripleBaconGrande.png?1640861305995"
    // },
    // {
    //     "id": "4",
    //     "nombre": "Cuarto de Libra McCombo mediano",
    //     "precio": "1340",
    //     "ingredientes": "Hamburguesa de carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26003%20McCOMBO%20CUARTO%20DE%20LIBRA%20CON%20QUESO%20Mediano.png?1639147283417"
    // },
    // {
    //     "id": "5",
    //     "nombre": "Cuarto de Libra McCombo grande",
    //     "precio": "1540",
    //     "ingredientes": "Hamburguesa de carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaz, y cebolla . Acompañamiento y bebida grande a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26053%20McCOMBO%20CUARTO%20DE%20LIBRA%20CON%20QUESO%20Grande.png?1639147594723"
    // },
    // {
    //     "id": "6",
    //     "nombre": "Doble Cuarto de Libra McCombo mediano",
    //     "precio": "1680",
    //     "ingredientes": "Hamburguesa doble carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza, cebolla y pepinillos. Acompañamiento y bebida mediana a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26004%20McCOMBO%20DOBLE%20CUARTO%20DE%20LIBRA%20CON%20QUESO%20Mediano.png?1639147326040"
    // },
    // {
    //     "id": "7",
    //     "nombre": "Doble Cuarto de Libra McCombo grande",
    //     "precio": "1880",
    //     "ingredientes": "Hamburguesa con doble carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaz, y cebolla . Acompañamiento y bebida grande a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26054%20McCOMBO%20DOBLE%20CUARTO%20DE%20LIBRA%20CON%20QUESO%20Grande.png?1639147652487"
    // },
    // {
    //     "id": "8",
    //     "nombre": "Big Mac McCombo mediano",
    //     "precio": "1340",
    //     "ingredientes": "Hamburguesa con doble carne 100% vacuna, salsa Big Mac, queso derretido, cebolla, lechuga y pepino. Acompañamiento y bebida mediana a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26000%20McCOMBO%20BIG%20MAC%20Mediano.png?1639147005779"
    // },
    // {
    //     "id": "9",
    //     "nombre": "Big Mac McCombo grande",
    //     "precio": "1540",
    //     "ingredientes": "Hamburguesa con doble carne 100% vacuna, salsa Big Mac, queso cheddar, cebolla, lechuga y pepino. Acompañamiento y bebida grande a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26050%20McCOMBO%20BIG%20MAC%20Grande.png?1639147436353"
    // },
    {
        "id": "10",
        "nombre": "Grand Doble Tasty McCombo mediano",
        "precio": "1680",
        "ingredientes": "Hamburguesa con doble carne 100% vacuna, salsa Tasty,cheddar,lechuga, tomate,cebolla en un pan más grande. Acompañamiento y bebida mediana a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26933%20McCOMBO%20GRAND%20DOBLE%20TASTY%20Mediano.png?1639151050896"
    },
    {
        "id": "11",
        "nombre": "Grand Doble Tasty McCombo grande",
        "precio": "1880",
        "ingredientes": "Hamburguesa con doble carne 100% vacuna, salsa Tasty,cheddar,lechuga, tomate,cebolla en un pan más grande. Acompañamiento y bebida grande a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26937%20McCOMBO%20GRAND%20DOBLE%20TASTY%20Grande.png?1639151144087"
    },
    // {
    //     "id": "12",
    //     "nombre": "McPollo McCombo mediano",
    //     "precio": "1300",
    //     "ingredientes": "Hamburguesa con medallón de pollo frito, mayonesa y lechuga. Acompañamiento y bebida medianos a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26352%20McCOMBO%20McPOLLO%20Mediano.png?1639149118691"
    // },
    // {
    //     "id": "13",
    //     "nombre": "McPollo McCombo grande",
    //     "precio": "1500",
    //     "ingredientes": "Hamburguesa con medallón de pollo frito, mayonesa y lechuga. Acompañamiento y bebida grandes a elección",
    //     "tipo": "Combos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26350%20McCOMBO%20McPOLLO%20Grande.png?1639149066094"
    // },
    {
        "id": "14",
        "nombre": "McNifica McCombo mediano",
        "precio": "1420",
        "ingredientes": "Hamburguesa de carne 100% vacuna, queso Cheddar, lechuga, tomate, kétchup, mostaza y cebolla. Acompañamiento y bebida mediana a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26002%20McCOMBO%20McNIFICA%20Mediano.png?1639147240577"
    },
    {
        "id": "15",
        "nombre": "McNifica McCombo grande",
        "precio": "1620",
        "ingredientes": "Hamburguesa de carne 100% vacuna, queso Cheddar, lechuga, tomate, kétchup, mostaza y cebolla. Acompañamiento y bebida grande a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26052%20McCOMBO%20McNIFICA%20Grande.png?1639147524504"
    },
    {
        "id": "16",
        "nombre": "Grand Tasty Turbo Bacon Triple Combo mediano",
        "precio": "2100",
        "ingredientes": "Hamburguesa con triple carne, bacon en tiras y triturado, salsa Tasty, cheddar,lechuga, tomate y cebolla. Con papas fritas y bebida a elección medianas",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/McCombo%20Mediano%20Grand%20Tasty%20Turbo%20Bacon%20Triple.png?1652986172863"
    },
    {
        "id": "17",
        "nombre": "Grand Tasty Turbo Bacon Triple Combo Grande",
        "precio": "2300",
        "ingredientes": "Hamburguesa con triple carne, bacon en tiras y triturado, salsa Tasty, cheddar,lechuga, tomate y cebolla. Con papas fritas y bebida a elección grandes",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/McCombo%20Grande%20Grand%20Tasty%20Turbo%20Bacon%20Triple.png?1652986211954"
    },
    {
        "id": "18",
        "nombre": "McNuggets x 11 McCombo mediano",
        "precio": "1300",
        "ingredientes": "11 McNuggets de pechuga de pollo.Acompañada con papas fritas y bebida mediana a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/26005%20McCOMBO%20NUGGETS%20x%2010%20Mediano.png?1668538599783"
    },
    {
        "id": "19",
        "nombre": "McNuggets x 11 McCombo grande",
        "precio": "1500",
        "ingredientes": "11 McNuggets de pechuga de pollo.Acompañada con papas fritas y bebida grande a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/26055%20McCOMBO%20NUGGETS%20x%2010%20Grande.png?1668538645609"
    },
    {
        "id": "20",
        "nombre": "McNuggets x22 McCombo mediano",
        "precio": "1700",
        "ingredientes": "22 McNuggets de pechuga de pollo. Acompañada con papas fritas y bebida mediana a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26354%20McCOMBO%20NUGGETS%20x%2020%20Mediano.png?1668538743261"
    },
    {
        "id": "21",
        "nombre": "McNuggets x22 McCombo grande",
        "precio": "1900",
        "ingredientes": "22 McNuggets de pechuga de pollo. Acompañada con papas fritas y bebida grande a elección",
        "tipo": "Combos",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/26356%20McCOMBO%20NUGGETS%20x%2020%20Grande.png?1668538791778"
    },
    // {
    //     "id": "22",
    //     "nombre": "2do al 70% McCombo Cuarto de Libra mediano",
    //     "precio": "1740",
    //     "ingredientes": "Comprando un McCombo mediano Cuarto de Libra, el 2do McCombo mediano Cuarto de Libra lo pagás al 70% off",
    //     "tipo": "Promociones",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/rrss_cupones_mym_cupon%203.png?1656527613047"
    // },
    // {
    //     "id": "23",
    //     "nombre": "2 McCombos Medianos Big Mac",
    //     "precio": "2460",
    //     "ingredientes": "2 Mccombo Mediano Big Mac",
    //     "tipo": "Promociones",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/NGK_48594_2McCombosMBigMacDLV.png"
    // },
    // {
    //     "id": "24",
    //     "nombre": "2 McCombos Medianos Tasty Doble",
    //     "precio": "3030",
    //     "ingredientes": "2 McCombos Medianos Tasty Doble",
    //     "tipo": "Promociones",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK_48174_2McCombosMTastyDoble_DLV.png?1666289882068"
    // },
    // {
    //     "id": "25",
    //     "nombre": "Menu Ensalada Deli con Pollo Crispy",
    //     "precio": "910",
    //     "ingredientes": "Menú Ensalada Deli Pollo Grille o Crispy y Bebida",
    //     "tipo": "Promociones",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK_48858_MenuEnsalada%20BebidaDLV.png?1667306068675"
    // },
    // {
    //     "id": "26",
    //     "nombre": "Cupon Menú Deli Guacamole",
    //     "precio": "1000",
    //     "ingredientes": "Ensalada con tomate, lechuga, cebolla grillada, guacamole, huevo y pollo grillé o crispy. Acompañada con una gaseosa mediana a tu elección",
    //     "tipo": "Promociones",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/NGK_48933_Cupon_Menu_Deli_Guacamole_DLV.png"
    // },
    {
        "id": "27",
        "nombre": "2 Conos",
        "precio": "220",
        "ingredientes": "2 Conos a eleccion",
        "tipo": "Promociones",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/NGK_48824_2ConosDLV.png"
    },
    // {
    //     "id": "28",
    //     "nombre": "2 McFlurry Oreo",
    //     "precio": "860",
    //     "ingredientes": "2 McFlurry Oreo, elegí tu helado y salsa",
    //     "tipo": "Promociones",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/cupones-genericos-500-x-500-16.png?1649331458681"
    // },
    {
        "id": "29",
        "nombre": "40 OFF McCombo Mediano McPollo",
        "precio": "780",
        "ingredientes": "40 % OFF McCombo Mediano McPollo",
        "tipo": "Promociones",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK_48175_40offMCCombosMMCPolloDLV.png?1666289886135"
    },
    {
        "id": "30",
        "nombre": "McNuggets x 11",
        "precio": "900",
        "ingredientes": "11 McNuggets de pechuga de pollo",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/4725%20McNUGGETSx10%20SOLO.png?1668692387460"
    },
    {
        "id": "31",
        "nombre": "Mc Nuggets x 22",
        "precio": "1340",
        "ingredientes": "22 McNuggets de pechuga de pollo",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/320%20Nuggetsx20%20solo.png?1668692350495"
    },
    {
        "id": "32",
        "nombre": "McPollo",
        "precio": "900",
        "ingredientes": "La textura del pollo hace un gran equipo con la suavidad de la mayonesa y un colchón de lechuga",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/290%20McPOLLO%20SOLO.png?1639074443934"
    },
    {
        "id": "33",
        "nombre": "Triple Hamburguesa con Queso",
        "precio": "1000",
        "ingredientes": "Tres medallones de carne 100% vacuna, el queso cheddar mas rico, cebolla triturada, mostaza y ketchup",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/1526%20TRIPLE%20HAMBURGUESA%20CON%20QUESO%20SOLO.png?1639074585762"
    },
    {
        "id": "34",
        "nombre": "Triple Bacon",
        "precio": "1020",
        "ingredientes": "Hamburguesa de triple carne 100% vacuna, bacon premium, queso Cheddar, cebolla, mostaza y ketchup",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK_850_GranMcBacon%20TripleDLV.png?1666096859380"
    },
    {
        "id": "35",
        "nombre": "McNifica",
        "precio": "1040",
        "ingredientes": "Hamburguesa de carne 100% vacuna, queso Cheddar, lechuga, tomatem, kétchup, mostaza y cebolla fresca",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/2040%20McNIFICA%20SOLO.png?1639074759565"
    },
    {
        "id": "36",
        "nombre": "Cuarto de Libra con Queso",
        "precio": "940",
        "ingredientes": "Hamburguesa de carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con o sin Pepinillos",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/240%20CUARTO%20DE%20LIBRA%20solo.png?1639074267433"
    },
    {
        "id": "37",
        "nombre": "Doble Cuarto de Libra con Queso",
        "precio": "1340",
        "ingredientes": "Hamburguesa con doble carne 100% vacuna, dos fetas de queso Cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con o sin Pepinillos",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/7163%20DOBLE%20CUARTO%20DE%20LIBRA%20CON%20QUESO%20SOLO.png?1639075059109"
    },
    {
        "id": "38",
        "nombre": "Grand Tasty Doble",
        "precio": "1340",
        "ingredientes": "Hamburguesa con doble carne 100% vacuna, salsa Tasty, queso cheddar,lechuga, tomate, cebolla en un pan más grande con semillas",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/2422%20GRAND%20DOBLE%20TASTY%20SOLO.png?1639074854937"
    },
    {
        "id": "39",
        "nombre": "Grand Tasty Triple",
        "precio": "1460",
        "ingredientes": "Hamburguesa con triple carne 100% vacuna, salsa Tasty, queso cheddar,lechuga, tomate, cebolla en un pan más grande con semillas",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/2423%20GRAND%20TRIPLE%20TASTY%20SOLO.png?1639074899939"
    },
    {
        "id": "40",
        "nombre": "Grand Triple McBacon",
        "precio": "1460",
        "ingredientes": "Hamburguesa con triple carne 100% vacuna, bacon premium, queso cheddar, cebolla, kétchup y mostaza en un pan más grande con semillas",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/1704%20GRAND%20TRIPLE%20McBACON%20SOLO.png?1639074709772"
    },
    {
        "id": "41",
        "nombre": "Grand Doble McBacon",
        "precio": "1340",
        "ingredientes": "Hamburguesa con doble carne 100% vacuna, bacon premium, queso cheddar, cebolla, kétchup y mostaza en un pan más grande con semillas",
        "tipo": "Sandwiches y Snacks",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/1703%20GRAND%20DOBLE%20McBACON%20SOLO.png?1639074646812"
    },
    // {
    //     "id": "42",
    //     "nombre": "Papas Pequeñas",
    //     "precio": "370",
    //     "ingredientes": "Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/Papas-Chicas.png?1590086179011"
    // },
    // {
    //     "id": "43",
    //     "nombre": "Papas Fritas Medianas",
    //     "precio": "400",
    //     "ingredientes": "Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/PAPA-MEDIANA.png?1590000553996"
    // },
    // {
    //     "id": "44",
    //     "nombre": "Papas Fritas Grandes",
    //     "precio": "420",
    //     "ingredientes": "Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/PAPA-GRANDE.png?1590000621694"
    // },
    // {
    //     "id": "45",
    //     "nombre": "Papas Tasty",
    //     "precio": "470",
    //     "ingredientes": "Papas fritas con salsa Tasty. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK-Papas%20Tasty%20Bacon.png?1657630413519"
    // },
    // {
    //     "id": "46",
    //     "nombre": "Papas Cheddar",
    //     "precio": "470",
    //     "ingredientes": "Papas fritas queso cheddaar fundido. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/McCheddarBaconCajita.png?1657630425094"
    // },
    // {
    //     "id": "47",
    //     "nombre": "Papas Tasty y Bacon",
    //     "precio": "500",
    //     "ingredientes": "Papas con salsa Tasty y Bacon. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/Papas%20Tasty%20Bacon.png"
    // },
    // {
    //     "id": "48",
    //     "nombre": "Papas Cheddar y Bacon",
    //     "precio": "500",
    //     "ingredientes": "Papas fritas queso cheddaar fundido y bacon. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última",
    //     "tipo": "Acompañamientos",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK%20-%205761%20PapasCheddarBacon.png"
    // },
    {
        "id": "49",
        "nombre": "Coca-Cola Chica",
        "precio": "360",
        "ingredientes": "Refrescante gaseosa Coca Cola en tamaño chico",
        "tipo": "Bebidas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/430%20%20%20%20%20%20%20%20%20COCA%20COLA%20CHICA.png?1600783814947"
    },
    // {
    //     "id": "50",
    //     "nombre": "Coca-Cola Mediana",
    //     "precio": "380",
    //     "ingredientes": "Refrescante gaseosa Coca Cola en tamaño mediano",
    //     "tipo": "",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/500%20%20%20%20%20%20%20%20%20COCA%20COLA%20MEDIANA.png?1600783853437"
    // },
    // {
    //     "id": "51",
    //     "nombre": "Coca-Cola Grande",
    //     "precio": "400",
    //     "ingredientes": "Refrescante gaseosa Coca Cola en tamaño grande",
    //     "tipo": "Bebidas",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/570%20%20%20%20%20%20%20%20%20COCA%20COLA%20GRANDE.png?1600783888669"
    // },
    {
        "id": "52",
        "nombre": "Sprite chica",
        "precio": "360",
        "ingredientes": "Refrescante gaseosa Sprite sin azúcar en tamaño chico",
        "tipo": "Bebidas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/7085-SPRITE-ZERO-PEQUEN%CC%83A.png?1600783957369"
    },
    // {
    //     "id": "53",
    //     "nombre": "Sprite Mediana",
    //     "precio": "380",
    //     "ingredientes": "Refrescante gaseosa Sprite sin azúcar en tamaño mediano",
    //     "tipo": "Bebidas",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/7086-SPRITE-ZERO-MEDIANA.png?1600783970175"
    // },
    // {
    //     "id": "54",
    //     "nombre": "Sprite Grande",
    //     "precio": "400",
    //     "ingredientes": "Refrescante gaseosa Sprite sin azúcar en tamaño grande",
    //     "tipo": "Bebidas",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/7087-SPRITE-ZERO-GRANDE.png?1600783992106"
    // },
    {
        "id": "55",
        "nombre": "Fanta sin Azucar chica",
        "precio": "360",
        "ingredientes": "",
        "tipo": "Bebidas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/460-FANTA-PEQUEN%CC%83A.png?1600783837648"
    },
    // {
    //     "id": "56",
    //     "nombre": "Fanta sin azúcar Mediana",
    //     "precio": "380",
    //     "ingredientes": "Refrescante gaseosa Fanta sin azúcar en tamaño mediano",
    //     "tipo": "Bebidas",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/530-FANTA-MEDIANA.png?1600783876286"
    // },
    // {
    //     "id": "57",
    //     "nombre": "Fanta sin azúcar Grande",
    //     "precio": "400",
    //     "ingredientes": "Refrescante gaseosa Fanta sin azúcar en tamaño grande",
    //     "tipo": "Bebidas",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/600-FANTA-GRANDE.png?1600783903320"
    // },
    // {
    //     "id": "58",
    //     "nombre": "Agua",
    //     "precio": "300",
    //     "ingredientes": "Botella de 500ml de agua mineral",
    //     "tipo": "Bebidas",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/AguaMineral.png?1589998628633"
    // },  
    {
        "id": "59",
        "nombre": "Jugo de Naranja",
        "precio": "260",
        "ingredientes": "Jugo de Naranja",
        "tipo": "Bebidas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/Jugo%20de%20naranja1.png?1639424816389"
    },
    // {
    //     "id": "60",
    //     "nombre": "Super Cono",
    //     "precio": "190",
    //     "ingredientes": "Cono de helado. Podes elegir vainilla, dulce de leche o mixto.",
    //     "tipo": "Helados",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK-SuperconoDDL.png"
    // },
    // {
    //     "id": "61",
    //     "nombre": "Cono Croccantella",
    //     "precio": "240",
    //     "ingredientes": "Cono de helado con baño de chocolate crocante. Podes elegir vainilla, dulce de leche o mixto.",
    //     "tipo": "Helados",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK-Cono-Croccantella.png?1616789193279"
    // },
    // {
    //     "id": "62",
    //     "nombre": "Sundae de Chocolate",
    //     "precio": "380",
    //     "ingredientes": "El helado mas rico con una salsa tibia de chocolate. Podes elegir vainilla, dulce de leche o mixto.",
    //     "tipo": "Helados",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/CSO_final-250x200_sundae-chocolate.png?1604064075924"
    // },
    {
        "id": "63",
        "nombre": "Sundae Dulce de Leche",
        "precio": "380",
        "ingredientes": "El helado mas rico con una salsa tibia de dulce de leche. Podes elegir vainilla, dulce de leche o mixto.",
        "tipo": "Helados",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/CSO_final-250x200_sundae%20dulce-de-leche.png?1604064014853"
    },
    {
        "id": "64",
        "nombre": "Sundae de Frutilla",
        "precio": "380",
        "ingredientes": "El helado mas rico con una salsa tibia de frutilla. Podes elegir vainilla, dulce de leche o mixto.",
        "tipo": "Helados",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/CSO_final-250x200_sundae-frutilla.png?1604064110064"
    },
    // {
    //     "id": "65",
    //     "nombre": "Sundae Croccantella",
    //     "precio": "420",
    //     "ingredientes": "Helado, salsa caliente recuebierto con salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",
    //     "tipo": "Helados",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/NGK-Sundae-Croccantella.png?1600437937793"
    // },
    // {
    //     "id": "66",
    //     "nombre": "McFlurry Oreo",
    //     "precio": "560",
    //     "ingredientes": "Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final",
    //     "tipo": "Helados",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/McFlurryOreosinFondo.png?1590086627593"
    // },
    // {
    //     "id": "67",
    //     "nombre": "McFlurry KitKat",
    //     "precio": "560",
    //     "ingredientes": "Trocitos de Kit Kat con helado y salsa tibia a elección",
    //     "tipo": "Helados",
    //     "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/KitKat_sinfondo.png?1590087161362"
    // },
    {
        "id": "68",
        "nombre": "McFlurry Oreo Croccantella",
        "precio": "640",
        "ingredientes": "Salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",
        "tipo": "Helados",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/McFlurry-Croccantella-Oreo.png?1600806488544"
    },
    {
        "id": "69",
        "nombre": "McFlurry Kit Kat Croccantella",
        "precio": "640",
        "ingredientes": "Salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",
        "tipo": "Helados",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/McFlurry-Croccantella-Kitkat.png?1600806478230"
    },
    {
        "id": "70",
        "nombre": "Menú ensalada Deli Guacamole",
        "precio": "1250",
        "ingredientes": "Ensalada con proteína a elección, tomate, lechuga, cebolla caramelizada, huevo y guacamole con bebida a elección",
        "tipo": "Ensaladas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/26968_NGK_Ensalada_Gauacamole_pollo_crispy+bebida.png"
    },
    {
        "id": "71",
        "nombre": "Ensalada Deli Guacamole",
        "precio": "1070",
        "ingredientes": "Ensalada con proteína a elección, tomate, lechuga, cebolla caramelizada, huevo y guacamole.",
        "tipo": "Ensaladas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/upload/Images/204_NGK_Ensalada_Deli_Guacamole_Pollo_Crispy.png"
    },
    {
        "id": "72",
        "nombre": "Ensalada Deli",
        "precio": "900",
        "ingredientes": "Ensalada con ingredientes tradicionales: tomate, lechuga, cebolla fresca, una exquisita combinación entre los vegetales, texturas crocantes y un dressing",
        "tipo": "Ensaladas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/463%20500x500_Ensalada-sin-pollo.png?1632954269736"
    },
    {
        "id": "73",
        "nombre": "Menú Ensalada Deli con bebida",
        "precio": "1120",
        "ingredientes": "Ensalada con ingredientes tradicionales: tomate, lechuga, cebolla fresca, una exquisita combinación entre los vegetales, texturas crocantes y un dressing con bebida a elección",
        "tipo": "Ensaladas",
        "imgUrl": "https://rfm2latam.mcd.com/rfm2OnlineApp/images/24/en_US/48751%20500x500_Ensalada-pollo-Crispy+coca.png?1632954862860"
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },200)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === productId))
        }, 200)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter(prod => prod.tipo === productCategory))
        }, 200)
    })
}