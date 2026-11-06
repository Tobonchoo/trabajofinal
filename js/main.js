/**
 * TIMMY'S RESTAURANTE & CAVA - LA ESTRELLA, ANTIOQUIA (VERSIÓN 40 PLATOS MAESTROS)
 * 10 Platos de Colombia + 10 de Francia Michelin + 10 de España Michelin + 10 de Italia Michelin
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================
     0. AUTODETECCIÓN INTELIGENTE DE LA FOTO DEL CEO (ceo.jpg / my-profile-img)
     ======================================================================== */
  const ceoImg = document.getElementById('ceoOfficialPhoto');
  if (ceoImg) {
    const fallbacks = ['./my-profile-img.jpg', './my-profile-img_2.jpg', 'my-profile-img.jpg'];
    let fallbackIndex = 0;
    ceoImg.addEventListener('error', () => {
      if (fallbackIndex < fallbacks.length) {
        ceoImg.src = fallbacks[fallbackIndex];
        fallbackIndex += 1;
      }
    });
  }

  const FLAGS = {
    co: 'https://flagcdn.com/w40/co.png',
    fr: 'https://flagcdn.com/w40/fr.png',
    es: 'https://flagcdn.com/w40/es.png',
    it: 'https://flagcdn.com/w40/it.png',
    gb: 'https://flagcdn.com/w40/gb.png'
  };

  /* ========================================================================
     1. BASE DE DATOS ENCICLOPÉDICA DE 40 PLATOS CON ORIGEN Y RECETA
     ======================================================================== */
  const menuDishes = [
    // -------------------- 10 PLATOS TÍPICOS COLOMBIANOS DE AUTOR --------------------
    {
      id: 'col-1', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Antioquia',
      name: '1. Bandeja Paisa de Autor "Estrella del Aburrá"', price: 68000,
      tempTech: '63 °C Sous-Vide / 220 °C Suflado', prepTime: '14 Horas', allergens: 'Huevo, Lácteos', pairingId: 'liq-3', pairingName: 'Ron Colombiano 21 Años',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      summary: 'Panceta de diez patas confitada 12h y suflada en piel de cristal, cremoso de fríjol cargamanto de Urrao, solomito en polvo de carne, gel de aguacate Hass y huevo poché a 63 °C.',
      origin: 'Evolución de alta cocina del plato arriero antioqueño del siglo XIX en el Valle de Aburrá y el Viejo Caldas.',
      ingredients: ['Fríjol cargamanto rojo de Urrao', 'Tocino barriguero de diez patas', 'Solomito madurado y chorizo santarrosano', 'Aguacate Hass, plátano maduro al carbón, arepa de maíz trillado y huevo de campo'],
      steps: ['Remojar y cocer los fríjoles con fondo ahumado y plátano verde rallado.', 'Confitar el tocino 10h a 82 °C y suflar a 220 °C hasta lograr corteza de cristal.', 'Cocinar el huevo a 63.5 °C por 45 min y emplatar sobre espejo de hogao caramelizado.']
    },
    {
      id: 'col-2', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Cundinamarca & Boyacá',
      name: '2. Ajiaco Santafereño Imperial con Perlas de Alcaparra', price: 56000,
      tempTech: '88 °C Infusión de Guascas', prepTime: '6 Horas', allergens: 'Lácteos', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      summary: 'Velouté de tres papas nativas (criolla, pastusa y sabanera), suprema de pollo campesino dorada en mantequilla de guascas y esferificación de alcaparras.',
      origin: 'Herencia muisca prehispánica del altiplano andino enriquecida en la colonia con crema y alcaparras.',
      ingredients: ['Papa criolla, pastusa y sabanera', 'Ramillete fresco de guascas silvestres', 'Pechuga de pollo campesino, mazorca tierna, crema agria y alcaparras'],
      steps: ['Elaborar un fondo concentrado de aves asadas por 5 horas.', 'Escalonar la cocción de las tres papas para que la criolla espese naturalmente el caldo.', 'Infusionar las guascas 8 minutos antes de servir y coronar con perlas de alcaparra.']
    },
    {
      id: 'col-3', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Pacífico & Urabá',
      name: '3. Cazuela Real de Mariscos en Leche de Coco Primera Prensa', price: 82000,
      tempTech: 'Fumet al Brandy + Gratinado 240 °C', prepTime: '4 Horas', allergens: 'Mariscos, Pescado, Lácteos', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      summary: 'Langostinos tigre U-12, pulpo braseado, almejas y pesca blanca en bisque de corales, leche de coco artesanal y hierbas de azotea del Pacífico.',
      origin: 'Tradición afrocolombiana de las costas de Tumaco, Buenaventura y Urabá con técnica de bisque francés.',
      ingredients: ['Langostinos tigre, pulpo, calamar y mejillones', 'Leche de coco extraída en frío', 'Cilantro cimarrón, poleo, pimentón asado, achiote y brandy'],
      steps: ['Tostar caparazones de langostino y flambear con brandy para extraer el bisque.', 'Reducir con leche de coco fresca y refrito chocoano.', 'Sellar los mariscos a la plancha y gratinar en cazuela de barro de La Chamba.']
    },
    {
      id: 'col-4', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Caribe Cartagenero',
      name: '4. Posta Negra Cartagenera Glaseada en Café de Antioquia', price: 74000,
      tempTech: 'Braseado 18 Horas a 74 °C', prepTime: '18 Horas', allergens: 'Lácteos', pairingId: 'liq-3', pairingName: 'Ron Colombiano 21 Años',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      summary: 'Punta de anca madurada 28 días, sellada en carbón aromático de cebolla, melado de panela de Yolombó, espresso de Concordia y arroz con coco titoté.',
      origin: 'Clásico de las casas señoriales de Cartagena de Indias, fusionado con café de altura del Suroeste Antioqueño.',
      ingredients: ['320 g de punta de anca madurada', 'Panela orgánica, café espresso de origen, clavo y pimienta de olor', 'Arroz con coco titoté y patacón suflado'],
      steps: ['Marinar la res 24h en especias dulces, cebolla morada y café.', 'Sellar en caldero de hierro hasta oscurecer la superficie.', 'Brasear lentamente con panela hasta lograr textura de mantequilla y servir con arroz de coco.']
    },
    {
      id: 'col-5', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Tolima Grande',
      name: '5. Lechona Tolimense en Lingote de Piel de Cristal & Naranja Agria', price: 69000,
      tempTech: 'Horneado Lento 12 Horas a 140 °C', prepTime: '12 Horas', allergens: 'Sin Alérgenos', pairingId: 'liq-3', pairingName: 'Ron Colombiano 21 Años',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      summary: 'Cerdo ibérico-criollo relleno de arveja amarilla tierna y cebolla larga confitada en manteca aromatizada, prensado en lingote con galleta sonora de piel e insulso.',
      origin: 'Patrimonio gastronómico del Tolima y Huila de raíz hispánica, ejecutado en Timmy’s sin grano de arroz para respetar la pureza tolimense.',
      ingredients: ['Pierna y piel entera de cerdo seleccionado', 'Arveja amarilla seca hidratada', 'Cebolla junca, ajo, comino en grano y jugo de naranja agria'],
      steps: ['Adobar la carne y piel con naranja agria, ajo y comino por 24 horas.', 'Rellenar por capas con cerdo picado a cuchillo y arveja amarilla.', 'Hornear 10 horas a baja temperatura y dar golpe final de calor para reventar el cuero.']
    },
    {
      id: 'col-6', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Valles Interandinos',
      name: '6. Sancocho Trifásico en Consomé Clarificado y Trufa Andina', price: 62000,
      tempTech: 'Clarificación Francesa (Consommé Double)', prepTime: '8 Horas', allergens: 'Apio', pairingId: 'liq-6', pairingName: 'Elixir de Lulo & Viche',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      summary: 'Morrillo de res, costilla de cerdo ahumada y pernil de gallina criolla servidos con yuca mantequilluda, plátano hartón, mazorca y caldo dorado cristalino.',
      origin: 'El plato de celebración familiar por excelencia en Antioquia y el Valle, refinado mediante clarificación francesa con claras batidas.',
      ingredients: ['Morrillo de res, costilla de cerdo y gallina de campo', 'Yuca chirosa, plátano verde, papa capira y mazorca', 'Cilantro, cimarrón, cebolla larga y aceite de trufa'],
      steps: ['Cocinar las tres carnes lentamente con tubérculos y hierbas.', 'Clarificar el caldo resultante para obtener un consomé brillante color ámbar.', 'Emplatar los cortes glaseados y verter el consomé humeante en la mesa frente al comensal.']
    },
    {
      id: 'col-7', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Amazonas & Chocó',
      name: '7. Encocado de Pirarucú Amazónico y Camarón Tigre Ahumado', price: 86000,
      tempTech: 'Ahumado en Frío + Reducción de Coco', prepTime: '3 Horas', allergens: 'Pescado, Crustáceos', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      summary: 'Lomo de pirarucú sostenible sellado en mantequilla de achiote, camarones ahumados en madera de guamo y salsa aterciopelada de coco y tucupí negro.',
      origin: 'Encuentro biocultural entre la selva amazónica colombiana y la costa pacífica chocoana.',
      ingredients: ['220 g de lomo de pirarucú fresco', '100 g de camarón tigre del Pacífico', 'Leche de coco, ají dulce, reducción de tucupí amazónico y plátano tentación'],
      steps: ['Marinar el pirarucú con cítricos y sellar a la plancha dejando el centro jugoso.', 'Ahumar ligeramente los camarones y saltearlos en refrito de ají dulce.', 'Napar con la emulsión de leche de coco y puntos de tucupí reducido.']
    },
    {
      id: 'col-8', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Llanos Orientales',
      name: '8. Mamona Llanera a la Vara en Cocción Lenta de 12 Horas', price: 78000,
      tempTech: 'Asado Vertical a la Leña a 110 °C', prepTime: '12 Horas', allergens: 'Gluten (Cerveza en marinada)', pairingId: 'liq-5', pairingName: 'Ribera del Duero Gran Reserva',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      summary: 'Cortes nobles de ternera ("la osa" y "los tembladores") asados al calor indirecto de leña de yopo y guayabo, acompañados de tungos de arroz y yuca al mojo.',
      origin: 'Tradición vaquera de la Orinoquía colombiana (Meta, Casanare y Arauca) alrededor del fuego de sabana.',
      ingredients: ['Ternera joven de pastoreo libre', 'Cerveza artesanal, sal gruesa y especias de sabana', 'Yuca cocida al vapor, tungos llaneros y ají de leche'],
      steps: ['Ensartar los cortes en varas verticales alrededor de la brasa indirecta.', 'Hidratar periódicamente con salmuera de cerveza y hierbas durante 12 horas.', 'Cortar al momento y servir con ají picante de suero y cilantro.']
    },
    {
      id: 'col-9', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Sabanas de Sucre & Córdoba',
      name: '9. Mote de Queso Costeño con Suero Atollabuey y Ñame Espina', price: 52000,
      tempTech: 'Emulsión Térmica de Ñame a 90 °C', prepTime: '3 Horas', allergens: 'Lácteos', pairingId: 'liq-6', pairingName: 'Elixir de Lulo & Viche',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      summary: 'Crema sedosa de ñame espina y ñame criollo, dados de queso costeño asado al soplete, hojas de bleo de chupa, suero costeño y berenjena tatemada.',
      origin: 'Insignia culinaria de los Montes de María y el Sinú en el Caribe colombiano.',
      ingredients: ['Ñame espina y ñame diamante', 'Queso costeño semiduro y suero atollabuey artesanal', 'Hojas de bleo de chupa, ajo asado, cebolla roja y limón mandarina'],
      steps: ['Cocinar el ñame hasta que suelte su almidón natural formando una crema espesa.', 'Incorporar el sofrito de cebolla morada, ajo asado y hojas de bleo.', 'Añadir cubos de queso costeño dorados y coronar con espiral de suero.']
    },
    {
      id: 'col-10', category: 'colombia', flagUrl: FLAGS.co, countryName: 'Colombia • Montaña Antioqueña',
      name: '10. Tamal Antioqueño Deconstruido en Hoja de Bijao Ahumada', price: 54000,
      tempTech: 'Cocción al Vapor en Hoja Viva a 96 °C', prepTime: '5 Horas', allergens: 'Sin Alérgenos', pairingId: 'liq-6', pairingName: 'Elixir de Lulo & Viche',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      summary: 'Mousse aireada de maíz trillado amarillo al achiote, costilla de cerdo y tocino glaseados 8 horas, vegetales orgánicos torneados y aroma de hoja de bijao al fuego.',
      origin: 'Receta ancestral de las abuelas de La Estrella y el Valle de Aburrá presentada en formato de alta gastronomía.',
      ingredients: ['Masa fina de maíz trillado antioqueño', 'Costilla de cerdo, tocino y pechuga de pollo', 'Zanahoria baby, arveja verde, papa criolla y hojas de bijao soasadas'],
      steps: ['Soasar las hojas de bijao sobre llama directa para liberar sus aceites aromáticos.', 'Montar la mousse tibia de maíz con las carnes confitadas en su propio jugo.', 'Cerrar el atado y terminar al vapor 45 minutos antes de abrir en la mesa.']
    },

    // -------------------- 10 PLATOS FRANCIA MICHELIN --------------------
    {
      id: 'fra-1', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • 3 Estrellas Michelin (Lyon)',
      name: '11. Boeuf Bourguignon Tradition Paul Bocuse', price: 94000,
      tempTech: 'Braseado 16 Horas en Pinot Noir', prepTime: '24 Horas', allergens: 'Lácteos, Sulfitos', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      summary: 'Carrillera de res braseada en Pinot Noir de Borgoña, cebollitas perla glaseadas, champiñones botón torneados y puré Joël Robuchon.',
      origin: 'Clásico de Borgoña consagrado en la alta cocina mundial por Auguste Escoffier y Paul Bocuse.',
      ingredients: ['300 g de carrillera de res', '750 ml de Pinot Noir de Borgoña', 'Panceta ahumada, bouquet garni, demi-glace y mantequilla normanda'],
      steps: ['Marinar la carne 12h en Pinot Noir y verduras aromáticas.', 'Sellar en mantequilla, flambear con Cognac y brasear 16 horas a 125 °C.', 'Reducir la salsa a punto espejo y servir sobre puré emulsionado.']
    },
    {
      id: 'fra-2', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • 3 Estrellas Michelin (París)',
      name: '12. Ratatouille Confitado "Byaldi" Estilo L’Arpège', price: 64000,
      tempTech: 'Confitado al Horno 135 °C', prepTime: '3.5 Horas', allergens: 'Vegano / Sin Alérgenos', pairingId: 'liq-6', pairingName: 'Elixir de Lulo & Viche',
      image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=800&q=80',
      summary: 'Rosetón milimétrico de calabacines, berenjena japonesa y tomate sobre piperada asada de pimientos dulces y aceite de hierbas de Provenza.',
      origin: 'Inspirado en la alta cocina vegetal de Alain Passard (L’Arpège, París) y Thomas Keller.',
      ingredients: ['Calabacín verde y amarillo, berenjena y tomate maduro', 'Pimientos rojos asados, ajo confitado y cebolla blanca', 'Aceite de oliva virgen extra y tomillo limón'],
      steps: ['Sofreír lentamente la piperada de pimientos asados.', 'Laminar los vegetales a 1.5 mm en mandolina y disponer en espiral.', 'Hornear cubierto con papel pergamino a 135 °C durante 2.5 horas.']
    },
    {
      id: 'fra-3', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Périgord Michelin',
      name: '13. Magret de Pato Lacado en Miel de Uchuva y Foie Gras', price: 108000,
      tempTech: '56 °C Corazón Rosado', prepTime: '2 Horas', allergens: 'Lácteos', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1514944298352-f4d732142f74?auto=format&fit=crop&w=800&q=80',
      summary: 'Pechuga de pato con piel cuadrillé crujiente, escalope de foie gras fresco a la plancha, gastrique de uchuvas antioqueñas y milhojas de papa trufada.',
      origin: 'Tradición de Gascuña y Périgord fusionada con el carácter cítrico de la uchuva andina.',
      ingredients: ['Magret de pato de 320 g y medallón de foie gras', 'Uchuvas frescas, miel pura y vinagre de champaña', 'Papa capira laminada y mantequilla de trufa'],
      steps: ['Marcar la piel en rombos y fundir la grasa partiendo de sartén fría.', 'Lacar con miel y uchuvas llevando el núcleo a 56 °C.', 'Sellar el foie gras 30 segundos por lado y coronar el magret.']
    },
    {
      id: 'fra-4', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Provenza & Marsella Michelin',
      name: '14. Bouillabaisse Real de Marsella con Rouille de Azafrán', price: 98000,
      tempTech: 'Emulsión de Roca & Azafrán a 92 °C', prepTime: '5 Horas', allergens: 'Pescado, Mariscos, Huevo, Gluten', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      summary: 'Sopa imperial provenzal de pescados de roca, mejillones y langostinos infusionada con hinojo silvestre, piel de naranja, pastis y crutones con salsa rouille.',
      origin: 'Creada en el puerto viejo de Marsella y elevada por los restaurantes tres estrellas de la Costa Azul.',
      ingredients: ['Pescados de roca, pargo rojo, mejillones y langostinos', 'Bulbo de hinojo, hebras de azafrán, licor Pastis y piel de naranja', 'Salsa rouille (ajo, yema, azafrán y aceite de oliva)'],
      steps: ['Rehogar pescados de roca con hinojo, ajo, tomate y flambear con Pastis.', 'Triturar y pasar por chino fino para obtener un caldo sedoso e intenso.', 'Cocinar los lomos nobles en el caldo y servir con tostadas untadas de rouille.']
    },
    {
      id: 'fra-5', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Borgoña Michelin',
      name: '15. Coq au Vin de Chambertin & Morillas Silvestres', price: 88000,
      tempTech: 'Braseado en Vino Tinto a 85 °C', prepTime: '12 Horas', allergens: 'Lácteos, Sulfitos', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      summary: 'Ave campera marinada y estofada en vino tinto Gevrey-Chambertin, hongos morillas rellenos de duxelles y lardons de tocino ahumado.',
      origin: 'Receta histórica de los viñedos de Borgoña, favorita de las grandes mesas clásicas de Francia.',
      ingredients: ['Piezas de ave campera de corral', 'Vino tinto de Borgoña y brandy Marc de Bourgogne', 'Hongos morillas (morchella), chalotas y mantequilla'],
      steps: ['Marinar el ave 24 horas en vino tinto con hierbas tomillo y laurel.', 'Dorar las piezas, flambear con brandy y cocer suavemente en la marinada reducida.', 'Incorporar las morillas salteadas en mantequilla antes del emplatado.']
    },
    {
      id: 'fra-6', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Normandía & París Michelin',
      name: '16. Sole Meunière Clásica en Mantequilla Noisette de Normandía', price: 96000,
      tempTech: 'Beurre Noisette a 155 °C', prepTime: '35 Minutos al Minuto', allergens: 'Pescado, Lácteos, Gluten', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      summary: 'Lenguado entero dorado en mantequilla avellana espumosa de Normandía, alcaparras crujientes, perejil plat y jugo de limón Meyer.',
      origin: 'Plato predilecto del Rey Luis XIV y piedra angular de la escuela clásica francesa.',
      ingredients: ['Lenguado fresco entero de 400 g', '120 g de mantequilla de Normandía con sal marina', 'Limón Meyer, alcaparras finas y perejil fresco'],
      steps: ['Pasar ligeramente el lenguado por velo de harina y dorar en mantequilla clarificada.', 'En sartén aparte, avellanar mantequilla fresca hasta que desprenda aroma de nuez tostada.', 'Verter sobre el pescado con jugo de limón para crear espuma cítrica instantánea.']
    },
    {
      id: 'fra-7', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • París Belle Époque Michelin',
      name: '17. Tournedos Rossini con Trufa Negra del Périgord y Salsa Périgueux', price: 124000,
      tempTech: '54 °C Saignant + Reducción Madeira', prepTime: '3 Horas', allergens: 'Lácteos, Gluten, Sulfitos', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      summary: 'Corazón de filete mignon sobre brioche tostado en mantequilla, coronado con foie gras poêlé, láminas de trufa negra y reducción de vino de Madeira.',
      origin: 'Creado en París por el maestro Marie-Antoine Carême y Casimir Moisson en honor al compositor Gioachino Rossini.',
      ingredients: ['220 g de centro de lomo de res (Tournedos)', 'Escalope de foie gras de pato y pan brioche artesanal', 'Trufa negra Tuber melanosporum y vino fortificado Madeira'],
      steps: ['Sellar el tournedos en mantequilla clarificada hasta alcanzar 54 °C internos.', 'Montar sobre medallón de brioche dorado y coronar con el foie gras recién marcado.', 'Napar con salsa Périgueux (demi-glace reducida con Madeira y trufa picada).']
    },
    {
      id: 'fra-8', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Languedoc & Toulouse Michelin',
      name: '18. Cassoulet Imperial de Toulouse Confitado 12 Horas', price: 89000,
      tempTech: '7 Costras Gratinadas en Cassole de Barro', prepTime: '14 Horas', allergens: 'Gluten (Pan rallado)', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      summary: 'Alubias blancas Tarbais fundentes cocinadas con confit de pato crujiente, salchicha artesanal de Toulouse y panceta en cazuela de barro tradicional.',
      origin: 'Monumento culinario del suroeste francés (Castelnaudary, Carcassonne y Toulouse).',
      ingredients: ['Alubias blancas Tarbais hidratadas', 'Muslo de pato en confit y salchicha fresca de Toulouse', 'Caldo de aves, ajo de Lautrec y miga de pan rústico'],
      steps: ['Cocinar las alubias suavemente en caldo gelatinoso de pato y cerdo.', 'Disponer en cazuela de barro alternando el confit de pato y las salchichas doradas.', 'Hornear durante 4 horas rompiendo la costra superior 7 veces según el canon tradicional.']
    },
    {
      id: 'fra-9', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Les Halles de París',
      name: '19. Soupe à l’Oignon Gratinée al Comté de 24 Meses', price: 54000,
      tempTech: 'Caramelización Lenta 5 Horas + Salamandra', prepTime: '6 Horas', allergens: 'Gluten, Lácteos, Sulfitos', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      summary: 'Cebollas blancas y dulces caramelizadas durante 5 horas en mantequilla, desglasadas con Jerez y Cognac en caldo oscuro de ternera y gratinadas con queso Comté.',
      origin: 'Tradición nocturna de los antiguos mercados de Les Halles en París desde el siglo XVIII.',
      ingredients: ['1 kg de cebollas blancas cortadas en pluma fina', 'Caldo oscuro de ternera tostada, vino blanco seco y Cognac', 'Baguette de masa madre y queso Comté francés de 24 meses'],
      steps: ['Cocinar las cebollas a fuego mínimo en mantequilla durante 5 horas hasta lograr color caoba.', 'Desglasar con Cognac y vino blanco e incorporar el fondo de ternera.', 'Cubrir con baguette tostada y abundante queso Comté para gratinar a fuego alto.']
    },
    {
      id: 'fra-10', category: 'francia', flagUrl: FLAGS.fr, countryName: 'Francia • Alta Gastronomía Michelin',
      name: '20. Pichón Asado en Coffre al Armagnac y Milhojas de Trufa', price: 116000,
      tempTech: 'Asado en Coffre a 58 °C + Flambeado', prepTime: '2.5 Horas', allergens: 'Lácteos', pairingId: 'liq-1', pairingName: 'Châteauneuf-du-Pape Grand Vin',
      image: 'https://images.unsplash.com/photo-1514944298352-f4d732142f74?auto=format&fit=crop&w=800&q=80',
      summary: 'Supremas de pichón asadas sobre su carcasa (en coffre) bañadas continuamente en mantequilla espumosa de tomillo, muslos confitados y jugo al Armagnac.',
      origin: 'Prueba de fuego técnica de los restaurantes tres estrellas Michelin de Francia.',
      ingredients: ['Pichón de corral entero', 'Armagnac añejo, chalotas, tomillo fresco y mantequilla', 'Jugo reducido de carcasas y trufa negra'],
      steps: ['Separar los muslos para confitarlos lentamente y asar el pecho sobre el hueso regando con mantequilla (arroser).', 'Reposar la carne en rejilla tibia durante 10 minutos.', 'Desglasar la sartén con Armagnac y fondo corto para napar al momento de servir.']
    },

    // -------------------- 10 PLATOS ESPAÑA MICHELIN --------------------
    {
      id: 'esp-1', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • 3 Estrellas Michelin (Levante)',
      name: '21. Arroz Meloso de Bogavante Azul y Azafrán de La Mancha DOP', price: 118000,
      tempTech: 'Cocción Exacta 16 Minutos', prepTime: '5 Horas', allergens: 'Crustáceos, Pescado, Huevo', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
      summary: 'Arroz Bomba hidratado en caldo potente de cangrejos de roca, pistilos de azafrán español tostado, medallones de bogavante a la brasa y alioli de ajo negro.',
      origin: 'Homenaje a la alta cocina mediterránea de tres estrellas Michelin en Alicante y Valencia.',
      ingredients: ['Arroz Bomba DOP Calasparra y bogavante entero', 'Salmorreta de ñora levantina, tomate y ajo', 'Hebras de azafrán de La Mancha y fumet de roca'],
      steps: ['Sofreír la salmorreta y nacarar el grano de arroz Bomba con azafrán.', 'Añadir el fumet hirviendo y cocinar exactamente 16 minutos para textura melosa.', 'Terminar con el bogavante marcado a la brasa y puntos de alioli de ajo negro.']
    },
    {
      id: 'esp-2', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • 3 Estrellas Michelin (San Sebastián)',
      name: '22. Cochinillo Crujiente a Baja Temperatura & Manzana Reineta', price: 96000,
      tempTech: '68 °C por 16h + Plancha 230 °C', prepTime: '18 Horas', allergens: 'Lácteos', pairingId: 'liq-5', pairingName: 'Ribera del Duero Gran Reserva',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      summary: 'Lingote deshuesado de cochinillo lechal con corteza de cristal, jugo ligado al Jerez Oloroso y crema sedosa de manzana asada.',
      origin: 'Clásico castellano perfeccionado con cocción al vacío en las grandes casas Michelin del País Vasco.',
      ingredients: ['Costillar deshuesado de cochinillo lechal', 'Manzana Reineta, mantequilla avellana y Jerez Oloroso', 'Jugo reducido de huesos de cerdo'],
      steps: ['Cocinar el cochinillo al vacío a 68 °C durante 16 horas y prensar en frío.', 'Dorar únicamente por el lado de la piel en plancha hasta lograr corteza crujiente.', 'Acompañar con puré fino de manzana y reducción al Jerez.']
    },
    {
      id: 'esp-3', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Asador Vasco Michelin',
      name: '23. Txuletón Madurado 45 Días a la Brasa con Pimientos del Piquillo', price: 128000,
      tempTech: 'Parrilla Inclinada a 320 °C', prepTime: '45 Días Dry-Aged', allergens: 'Sin Alérgenos', pairingId: 'liq-5', pairingName: 'Ribera del Duero Gran Reserva',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      summary: 'Corte noble con hueso madurado en cámara de sal, sellado sobre brasas de encina y guayabo con sal Maldon y pimientos del Piquillo confitados.',
      origin: 'Inspirado en los grandes parrilleros vascos (Etxebarri y Tolosa).',
      ingredients: ['500 g de lomo alto con hueso Dry-Aged 45 días', 'Pimientos del Piquillo de Lodosa confitados en aceite de oliva y ajo', 'Escamas de sal Maldon'],
      steps: ['Atemperar la carne 2 horas antes del fuego.', 'Sellar sobre brasa viva para formar costra caramelizada manteniendo el centro rojo tibio.', 'Servir en plato caliente con los pimientos confitados en su propio pil-pil.']
    },
    {
      id: 'esp-4', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Galicia de Autor Michelin',
      name: '24. Pulpo a Feira Braseado sobre Parmentier Ahumado y Pimentón de la Vera', price: 84000,
      tempTech: 'Cocción 85 °C + Brasa de Carbón', prepTime: '3 Horas', allergens: 'Moluscos, Lácteos', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      summary: 'Tentáculo de pulpo de roca cocido en su propio jugo y terminado a la brasa, sobre espuma tibia de papa gallega, aceite arbequina y pimentón ahumado DOP.',
      origin: 'Reinterpretación contemporánea del pulpo tradicional de las ferias de Ourense y Lugo.',
      ingredients: ['Tentáculos de pulpo de roca de 250 g', 'Papa sabanera/gallega, mantequilla ahumada y nata', 'Pimentón de la Vera dulce y picante DOP + aceite de oliva virgen extra'],
      steps: ['Asustar el pulpo 3 veces y cocer a 85 °C hasta lograr mordida tierna.', 'Pasar por parrilla de carbón para dorar las ventosas.', 'Servir sobre parmentier cremoso con lluvia de pimentón de la Vera y aceite crudo.']
    },
    {
      id: 'esp-5', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Bilbao & Vizcaya Michelin',
      name: '25. Bacalao al Pil-Pil Vasco Ligado en Emulsión Natural', price: 92000,
      tempTech: 'Confitado y Vaivén a 62 °C', prepTime: '48h Desalado + 25 Min', allergens: 'Pescado', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      summary: 'Lomo de bacalao Skrei desalado en casa y confitado a baja temperatura, emulsionando su colágeno natural con aceite de oliva al ajo y guindilla.',
      origin: 'Obra cumbre de la gastronomía vizcaína donde cuatro ingredientes crean una salsa espesa sin harinas ni lácteos.',
      ingredients: ['Lomo grueso de bacalao de aguas frías con piel', 'Aceite de oliva virgen extra suave', 'Láminas de ajo dorado y aros de guindilla roja'],
      steps: ['Desalar el bacalao 48 horas en agua helada cambiando el agua cada 8 horas.', 'Confitar en aceite aromatizado con ajo a 62 °C para liberar las perlas de gelatina.', 'Ligar el pil-pil con movimiento circular de cazuela hasta obtener una crema brillante.']
    },
    {
      id: 'esp-6', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Albufera de Valencia',
      name: '26. Paella Valenciana Tradicional de Albufera con Socarrat Crujiente', price: 88000,
      tempTech: 'Fuego Abierto + Socarrat Final', prepTime: '2.5 Horas', allergens: 'Sin Alérgenos', pairingId: 'liq-5', pairingName: 'Ribera del Duero Gran Reserva',
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
      summary: 'Arroz Senia en paella de hierro muy fina con pollo de corral, conejo, garrofó valenciano, judía tabella, romero fresco y costra dorada de socarrat.',
      origin: 'La receta canónica de la huerta de Valencia y la Albufera, ejecutada al milímetro en capa fina de un solo grano.',
      ingredients: ['Arroz DOP Valencia (variedad Senia/Bomba)', 'Pollo de campo, conejo troceado, garrofó y judía verde plana (bajoqueta)', 'Tomate rallado, azafrán en hebra, pimentón dulce y rama de romero'],
      steps: ['Dorar muy lentamente las carnes en el centro de la paella con aceite de oliva.', 'Sofreír las verduras, el tomate y añadir el agua para generar el caldo en la misma paella.', 'Repartir el arroz en caballón, cocer 18 minutos e infusionar romero; avivar el fuego 40 segundos al final para formar el socarrat.']
    },
    {
      id: 'esp-7', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Andalucía Michelin',
      name: '27. Salmorejo & Gazpacho de Tomate Rosa con Jamón Ibérico de Bellota', price: 58000,
      tempTech: 'Emulsión en Frío a 8 °C', prepTime: '2 Horas', allergens: 'Gluten, Huevo', pairingId: 'liq-6', pairingName: 'Elixir de Lulo & Viche',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      summary: 'Emulsión aterciopelada de tomates rosas maduros y aceite de oliva Picual de primera cosecha, coronada con virutas de jamón ibérico 100% bellota y huevo de codorniz.',
      origin: 'Joya refrescante de Córdoba y Sevilla perfeccionada por chefs andaluces como Dani García.',
      ingredients: ['1 kg de tomates maduros de rama', 'Aceite de oliva virgen extra variedad Picual y pan de telera', 'Jamón ibérico de bellota cortado a cuchillo y ajo de Montalbán'],
      steps: ['Triturar los tomates pelados con el ajo y el pan hasta lograr una pasta lisa.', 'Emulsionar a hilo fino con el aceite Picual para obtener textura de terciopelo.', 'Servir frío con láminas de jamón ibérico que funden su grasa al contacto.']
    },
    {
      id: 'esp-8', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Asturias Michelin',
      name: '28. Fabada Asturiana de Casa Marcial con Faba de la Granja IGP', price: 79000,
      tempTech: 'Hervor Imperceptible 4 Horas', prepTime: '16 Horas', allergens: 'Sin Alérgenos', pairingId: 'liq-5', pairingName: 'Ribera del Duero Gran Reserva',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
      summary: 'Fabes frescas de piel imperceptible y corazón mantecoso cocidas con compango asturiano ahumado en madera de roble (chorizo, morcilla y lacón).',
      origin: 'Emblema del Principado de Asturias inmortalizado en la alta cocina por la familia Manzano (Casa Marcial).',
      ingredients: ['Faba asturiana IGP de la Granja', 'Chorizo y morcilla asturianos ahumados, panceta y lacón', 'Hebras de azafrán y aceite de oliva suave'],
      steps: ['Remojar las fabes en agua mineral fría durante 12 horas.', 'Cocer a fuego mínimo ("asustando" el hervor tres veces con agua fría) para que no rompan la piel.', 'Reposar 12 horas antes de servir para que el caldo trabe con el pimentón del compango.']
    },
    {
      id: 'esp-9', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • Córdoba & Madrid Michelin',
      name: '29. Rabo de Toro Cordobés Deshuesado al Vino Tinto de Rioja', price: 89000,
      tempTech: 'Estofado 8 Horas + Glaseado', prepTime: '10 Horas', allergens: 'Sulfitos, Lácteos', pairingId: 'liq-5', pairingName: 'Ribera del Duero Gran Reserva',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      summary: 'Cilindro meloso de rabo de toro estofado lentamente en vino Reserva de Rioja, deshuesado y glaseado en su propio jugo gelatinoso sobre cremoso de apionabo.',
      origin: 'Nacido en la tradición taurina de Córdoba en el siglo XIX y convertido en icono de la alta cocina española.',
      ingredients: ['Rabo de toro/res cortado por los nudos', '1 botella de vino tinto Rioja Reserva y brandy de Jerez', 'Puerro, zanahoria, cebolla, ajo y apionabo'],
      steps: ['Dorar los trozos de rabo y pochar las verduras durante 2 horas.', 'Cubrir con el vino de Rioja y estofar lentamente hasta que la carne se desprenda sola del hueso.', 'Deshuesar en caliente, formar un cilindro en film y glasear con la salsa reducida.']
    },
    {
      id: 'esp-10', category: 'espana', flagUrl: FLAGS.es, countryName: 'España • San Sebastián & Guetaria Michelin',
      name: '30. Kokotxas de Merluza del Cantábrico a la Brasa y Salsa Verde', price: 104000,
      tempTech: 'Doble Textura: Brasa + Pil-Pil Verde', prepTime: '1 Hora', allergens: 'Pescado, Moluscos', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      summary: 'Las piezas más gelatinosas y preciadas de la merluza pasadas por brasa suave y ligadas en salsa verde donostiarra con almejas finas.',
      origin: 'Manjar de las sociedades gastronómicas (txokos) de San Sebastián y los restaurantes con estrellas Michelin de Guipúzcoa.',
      ingredients: ['Kokotxas frescas de merluza de anzuelo', 'Almejas finas, fumet corto de pescado y vino blanco Txakoli', 'Ajo, perejil fresco y aceite de oliva arbequina'],
      steps: ['Marcar la mitad de las kokotxas en rejilla fina sobre brasa de carbón durante 60 segundos.', 'Ligar el resto en cazuela con ajo, Txakoli y perejil mediante vaivén hasta emulsionar.', 'Unir con las almejas recién abiertas al vapor.']
    },

    // -------------------- 10 PLATOS ITALIA MICHELIN --------------------
    {
      id: 'ita-1', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • 3 Estrellas Michelin (Milán & Módena)',
      name: '31. Risotto d’Oro al Azafrán y Parmigiano Reggiano 36 Meses', price: 84000,
      tempTech: 'Tostatura en Seco + Mantecatura Helada', prepTime: '18 Minutos', allergens: 'Lácteos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
      summary: 'Arroz Carnaroli Riserva mantecado con infusión de pistilos de azafrán de L’Aquila, demi-glace de tuétano, Parmigiano de 36 meses y lámina de oro de 24k.',
      origin: 'Obra maestra milanesa inmortalizada por Gualtiero Marchesi y Massimo Bottura.',
      ingredients: ['Arroz Carnaroli envejecido', 'Pistilos de azafrán italiano y vino Franciacorta', 'Parmigiano Reggiano 36 meses, mantequilla alpina helada y oro comestible'],
      steps: ['Tostar el Carnaroli en seco sin grasa y desglasar con vino blanco.', 'Añadir caldo e infusión de azafrán durante 15 minutos.', 'Mantecar fuera del fuego con mantequilla congelada y Parmigiano hasta textura "all’onda".']
    },
    {
      id: 'ita-2', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Piamonte Michelin',
      name: '32. Ravioli del Plin Rellenos de Trufa Negra y Ricotta de Búfala', price: 89000,
      tempTech: 'Masa 30 Yemas/Kg + Cocción 120 Seg', prepTime: '3 Horas', allergens: 'Gluten, Huevo, Lácteos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      summary: 'Pasta fresca de 30 yemas de huevo pellizcada a mano ("plin") sobre relleno cremoso de ricotta de búfala, mascarpone y trufa negra.',
      origin: 'Joya artesanal de las colinas de Langhe y Alba en el Piamonte italiano.',
      ingredients: ['Harina 00 y 30 yemas de huevo por kilo', 'Ricotta de búfala, mascarpone y trufa negra Tuber melanosporum', 'Mantequilla alpina y hojas de salvia fresca'],
      steps: ['Laminar la masa al huevo hasta que sea traslúcida.', 'Disponer el relleno y sellar dando pequeños pellizcos manuales.', 'Cocer 2 minutos y glasear en emulsión de mantequilla y salvia.']
    },
    {
      id: 'ita-3', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Lombardía Michelin',
      name: '33. Ossobuco alla Milanese con Gremolata Cítrica y Tuétano Asado', price: 96000,
      tempTech: 'Braseado Lento a 130 °C por 4 Horas', prepTime: '4.5 Horas', allergens: 'Lácteos, Apio', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      summary: 'Jarrete de ternera con su hueso y tuétano central braseado en vino blanco seco, fondo de ternera y verduras, terminado con gremolata fresca de limón.',
      origin: 'Clásico histórico de la Lombardía del siglo XVIII, servido tradicionalmente junto al risotto amarillo.',
      ingredients: ['Corte grueso de jarrete de ternera con hueso (Ossobuco)', 'Vino blanco seco, zanahoria, apio y cebolla', 'Gremolata (ralladura de limón, ajo picado y perejil fresco)'],
      steps: ['Sellar la pieza de ossobuco atada para conservar su forma y el tuétano.', 'Brasear cubierto en caldo y vino blanco a 130 °C durante 4 horas.', 'Espolvorear la gremolata fresca justo al salir a mesa para levantar los aromas.']
    },
    {
      id: 'ita-4', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Alba & Piamonte Michelin',
      name: '34. Tagliolini al Tartufo Bianco d’Alba en Mantequilla de Montaña', price: 112000,
      tempTech: 'Corte Tajarin 2 mm + Emulsión 65 °C', prepTime: '2 Horas', allergens: 'Gluten, Huevo, Lácteos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      summary: 'Fideos finísimos cortados a cuchillo ("tajarin") envueltos en emulsión sedosa de mantequilla de pastura alpina, agua de cocción y láminas de trufa.',
      origin: 'El plato de culto durante la temporada de trufa en Alba (Piamonte).',
      ingredients: ['Tagliolini artesanales de yema de huevo', 'Mantequilla de montaña italiana sin sal y Parmigiano 24 meses', 'Trufa laminada y aceite de trufa blanca de Alba'],
      steps: ['Hervir los tagliolini durante apenas 90 segundos en agua con poca sal.', 'Pasar a sartén tibia con mantequilla derretida y un cazo de agua almidonada para crear emulsión.', 'Emplatar en nido alto y laminar la trufa en caliente.']
    },
    {
      id: 'ita-5', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Toscana & Florencia Michelin',
      name: '35. Bistecca alla Fiorentina a la Brasa de Carbón con Romero', price: 132000,
      tempTech: 'Sellado 5 Min por Cara + 5 Min en Pie', prepTime: '30 Días Maduración', allergens: 'Sin Alérgenos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      summary: 'Corte T-Bone de tres dedos de grosor (solomillo y lomo bajo unidos por el hueso en T) asado a la brasa toscana con aceite de oliva nuevo y romero.',
      origin: 'Tradición renacentista de la familia Médici en Florencia (Toscana).',
      ingredients: ['600 g de corte Porterhouse / T-Bone madurado', 'Aceite de oliva virgen extra toscano primera prensa', 'Ramas de romero fresco, pimienta negra y flor de sal'],
      steps: ['Asar sobre brasa intensa sin pinchar jamás la carne, 5 minutos por cada cara.', 'Colocar la pieza de pie sobre el hueso en T durante 5 minutos finales.', 'Trinchar y bañar con hilo de aceite de oliva virgen extra y romero.']
    },
    {
      id: 'ita-6', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • 3 Estrellas Michelin (Módena)',
      name: '36. Lasagna Verde de Módena "La Parte Crocante" (Homenaje Bottura)', price: 78000,
      tempTech: 'Lámina Deshidratada Crujiente + Ragú 8h', prepTime: '9 Horas', allergens: 'Gluten, Huevo, Lácteos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      summary: 'Láminas de pasta verde de espinaca tostadas hasta quedar crujientes, intercaladas con ragú emiliano cocinado 8 horas y espuma ligera de bechamel al Parmigiano.',
      origin: 'Inspirado en el célebre plato de Massimo Bottura en Osteria Francescana (Módena), recreando las esquinas tostadas de la lasaña.',
      ingredients: ['Pasta fresca al huevo con espinaca orgánica', 'Ragú boloñés tradicional (res, cerdo, panceta, vino tinto y leche)', 'Bechamel aireada en sifón con Parmigiano Reggiano'],
      steps: ['Cocinar el ragú a fuego mínimo durante 8 horas agregando leche entera al final.', 'Hornear las puntas de la pasta verde entre tapetes de silicona para volverlas crujientes.', 'Montar por capas al momento intercalando ragú caliente, bechamel tibia y pasta crujiente.']
    },
    {
      id: 'ita-7', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Roma Michelin',
      name: '37. Tonnarelli Cacio e Pepe en Emulsión Científica de Pecorino DOP', price: 68000,
      tempTech: 'Emulsión de Queso Controlada a 62 °C', prepTime: '25 Minutos', allergens: 'Gluten, Huevo, Lácteos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
      summary: 'Pasta cuadrada romana ("tonnarelli") envuelta en crema brillante de queso Pecorino Romano DOP de 18 meses y tres variedades de pimienta negra tostada en mortero.',
      origin: 'Símbolo eterno de las trattorias y restaurantes con estrella Michelin de Roma.',
      ingredients: ['Pasta fresca Tonnarelli alla chitarra', 'Queso Pecorino Romano DOP rallado en microplane', 'Pimienta negra Tellicherry, Sarawak y Kampot recién machacadas'],
      steps: ['Tostar los granos de pimienta machacados en sartén seca e hidratar con agua de cocción.', 'Preparar la crema de Pecorino a 62 °C exactos para que el queso funda sin hilar.', 'Mantecar vigorosamente la pasta al dente hasta cubrir cada hebra con crema brillante.']
    },
    {
      id: 'ita-8', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Sicilia & Taormina Michelin',
      name: '38. Polpo Arrostito Siciliano con Caponata Agrodolce y Pistacho de Bronte', price: 86000,
      tempTech: 'Glaseado Cítrico + Brasa Mediterránea', prepTime: '3 Horas', allergens: 'Moluscos, Frutos Secos, Apio', pairingId: 'liq-2', pairingName: 'Champagne Blanc de Blancs',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      summary: 'Pulpo asado al estilo siciliano con glaseado de naranja sanguina, acompañado de caponata agridulce de berenjenas, alcaparras de Pantelleria y praliné salado de pistacho.',
      origin: 'Cocina solar de Sicilia que reúne la herencia árabe, normanda y griega del Mediterráneo.',
      ingredients: ['Tentáculo de pulpo cocido y asado', 'Berenjena, apio, aceitunas verdes, alcaparras, vinagre y miel', 'Pistachos verdes de Bronte tostados'],
      steps: ['Elaborar la caponata siciliana salteando cada vegetal por separado y uniendo con reducción agrodolce.', 'Dorar el pulpo en plancha y barnizar con reducción de naranja.', 'Terminar con granillo de pistacho verde tostado y hojas de menta.']
    },
    {
      id: 'ita-9', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Piamonte & Lombardía Michelin',
      name: '39. Gnocchi Nube de Papa Asada al Gorgonzola Dolce DOP y Nuez', price: 66000,
      tempTech: 'Papa Asada en Sal (0% Humedad)', prepTime: '2.5 Horas', allergens: 'Gluten, Huevo, Lácteos, Frutos Secos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
      summary: 'Ñoquis etéreos elaborados con papa horneada sobre cama de sal gruesa (con apenas un 15% de harina), bañados en fonduta de queso Gorgonzola Dolce y nueces.',
      origin: 'Técnica alpina del norte de Italia para lograr gnocchi que se deshacen en el paladar como una nube.',
      ingredients: ['Papa sabanera/pastusa horneada con piel sobre sal', 'Mínima proporción de harina 00 y yema de huevo', 'Queso Gorgonzola Dolce DOP, crema fresca y nueces pecanas tostadas'],
      steps: ['Hornear las papas sobre sal marina para extraer toda el agua y prensar en caliente.', 'Unir suavemente sin amasar en exceso para evitar desarrollar el gluten.', 'Hervir 60 segundos hasta que floten y napar con la fonduta tibia de Gorgonzola.']
    },
    {
      id: 'ita-10', category: 'italia', flagUrl: FLAGS.it, countryName: 'Italia • Lacio & Roma Michelin',
      name: '40. Saltimbocca alla Romana con Prosciutto di Parma 24 Meses', price: 82000,
      tempTech: 'Salteado Rápido a Fuego Vivo (180 Seg)', prepTime: '30 Minutos al Minuto', allergens: 'Lácteos, Gluten, Sulfitos', pairingId: 'liq-4', pairingName: 'Barolo DOCG Riserva',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      summary: 'Escalopines tiernos de ternera blanca envueltos en Prosciutto di Parma de 24 meses y hoja de salvia fresca, ligados en emulsión de vino blanco Frascati y mantequilla.',
      origin: 'Su nombre en italiano significa literalmente "salta a la boca", elogiado por Pellegrino Artusi en el siglo XIX.',
      ingredients: ['Medallones finos de lomo de ternera blanca', 'Lonjas de Prosciutto di Parma DOP 24 meses y hojas de salvia fresca', 'Vino blanco seco italiano y mantequilla fría'],
      steps: ['Fijar una hoja de salvia y una lonja de Prosciutto sobre cada medallón de ternera.', 'Dorar en mantequilla clarificada 90 segundos por lado para mantener la jugosidad.', 'Desglasar la sartén con vino blanco y emulsionar con mantequilla fría para napar.']
    }
  ];

  /* ========================================================================
     2. BASE DE DATOS DEL APARTADO DE LICORES Y CAVA (8 ETIQUETAS)
     ======================================================================== */
  const liquorsCatalog = [
    {
      id: 'liq-1', category: 'vino-espumoso', flagUrl: FLAGS.fr, countryName: 'Francia • Valle del Ródano',
      name: 'Châteauneuf-du-Pape Grand Vin', abv: '14.5% Alc.', price: 340000, priceFormatted: '$340.000 Botella / $68.000 Copa',
      bodyMeter: 92, oakMeter: 85, complexMeter: 95,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      notes: 'Notas profundas de cereza negra, trufa, cuero fino y pimienta blanca. Maridaje supremo para el Boeuf Bourguignon, Magret de Pato, Pichón y Tournedos Rossini.'
    },
    {
      id: 'liq-2', category: 'vino-espumoso', flagUrl: FLAGS.fr, countryName: 'Francia • Champagne AOC',
      name: 'Champagne Blanc de Blancs Grand Cru', abv: '12.0% Alc.', price: 420000, priceFormatted: '$420.000 Botella / $82.000 Copa',
      bodyMeter: 70, oakMeter: 60, complexMeter: 94,
      image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&w=800&q=80',
      notes: 'Burbuja microscópica, brioche tostado, flor de azahar y mineralidad calcárea. Ideal para Cazuela de Mariscos, Arroz de Bogavante, Sole Meunière y Kokotxas.'
    },
    {
      id: 'liq-3', category: 'destilado', flagUrl: FLAGS.co, countryName: 'Colombia • Solera Andina & Caribe',
      name: 'Ron Colombiano Gran Reserva 21 Años', abv: '40.0% Alc.', price: 290000, priceFormatted: '$290.000 Botella / $42.000 Trago Doble',
      bodyMeter: 90, oakMeter: 96, complexMeter: 92,
      image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80',
      notes: 'Añejado en barricas de roble blanco y ex-Jerez. Aromas de cacao de Urabá, vainilla y café tostado. Perfecto para Bandeja Paisa, Lechona y Posta Cartagenera.'
    },
    {
      id: 'liq-4', category: 'vino-espumoso', flagUrl: FLAGS.it, countryName: 'Italia • Piamonte DOCG',
      name: 'Barolo DOCG Riserva del Piamonte', abv: '14.0% Alc.', price: 365000, priceFormatted: '$365.000 Botella / $72.000 Copa',
      bodyMeter: 94, oakMeter: 88, complexMeter: 96,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
      notes: 'El "Rey de los Vinos" elaborado con uva Nebbiolo: pétalos de rosa seca, trufa y taninos sedosos para toda la partida de los 10 platos italianos Michelin.'
    },
    {
      id: 'liq-5', category: 'vino-espumoso', flagUrl: FLAGS.es, countryName: 'España • Ribera del Duero DOP',
      name: 'Ribera del Duero Gran Reserva Imperial', abv: '14.5% Alc.', price: 330000, priceFormatted: '$330.000 Botella / $65.000 Copa',
      bodyMeter: 95, oakMeter: 92, complexMeter: 93,
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=800&q=80',
      notes: 'Tempranillo de viñedos viejos: mora madura, regaliz negro y 24 meses en roble francés. Compañero del Cochinillo, Txuletón, Mamona, Fabada y Rabo de Toro.'
    },
    {
      id: 'liq-6', category: 'mixologia', flagUrl: FLAGS.co, countryName: 'Colombia • Mixología Molecular Timmy’s',
      name: 'Elixir Esmeralda de Lulo, Viche del Pacífico & Humo de Romero', abv: '16.5% Alc.', price: 44000, priceFormatted: '$44.000 Cóctel de Autor',
      bodyMeter: 68, oakMeter: 35, complexMeter: 89,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      notes: 'Destilado ancestral del Pacífico (Viche), clarificado de lulo antioqueño, flor de saúco y burbuja aromática de romero de La Estrella.'
    },
    {
      id: 'liq-7', category: 'destilado', flagUrl: FLAGS.gb, countryName: 'Escocia • Speyside Single Malt',
      name: 'Single Malt Scotch Whisky 18 Years Sherry Oak', abv: '43.0% Alc.', price: 580000, priceFormatted: '$580.000 Botella / $58.000 Trago',
      bodyMeter: 91, oakMeter: 95, complexMeter: 97,
      image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80',
      notes: 'Madurado en botas de Jerez Oloroso: frutos secos, naranja confitada, jengibre y final largo especiado.'
    },
    {
      id: 'liq-8', category: 'mixologia', flagUrl: FLAGS.it, countryName: 'Italia & Colombia • Aperitivo de Autor',
      name: 'Negroni Sbagliato en Barrica con Café Geisha de Antioquia', abv: '18.0% Alc.', price: 46000, priceFormatted: '$46.000 Cóctel de Autor',
      bodyMeter: 82, oakMeter: 74, complexMeter: 91,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      notes: 'Vermut Rosso di Torino macerado con café Geisha de Antioquia, bitter italiano, Prosecco Superiore y piel de naranja sanguina.'
    }
  ];

  /* ========================================================================
     3. MOTOR DE ANIMACIONES DE SCROLL Y TRANSICIÓN DE LICORES
     ======================================================================== */
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = `${progress}%`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.08 });

  function observeRevealElements() {
    document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));
  }

  const cavaSection = document.getElementById('cava-licores');
  const cavaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) cavaSection.classList.add('cava-portal-active');
    });
  }, { threshold: 0.12 });
  if (cavaSection) cavaObserver.observe(cavaSection);

  /* ========================================================================
     4. RENDERIZADO DE LOS 40 PLATOS CON FILTROS, BÚSQUEDA Y ORDENAMIENTO
     ======================================================================== */
  const menuGrid = document.getElementById('menuGrid');
  const dishSearchInput = document.getElementById('dishSearchInput');
  const dishSortSelect = document.getElementById('dishSortSelect');
  const dishesCounterText = document.getElementById('dishesCounterText');
  const expandAllRecipesBtn = document.getElementById('expandAllRecipesBtn');
  let activeDishCategory = 'all';
  let allExpanded = false;

  function renderDishes() {
    const query = dishSearchInput.value.trim().toLowerCase();
    const sortBy = dishSortSelect.value;
    menuGrid.innerHTML = '';

    let filtered = menuDishes.filter(dish => {
      const matchesCat = activeDishCategory === 'all' || dish.category === activeDishCategory;
      const matchesSearch = !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.summary.toLowerCase().includes(query) ||
        dish.countryName.toLowerCase().includes(query) ||
        dish.ingredients.join(' ').toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });

    if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
    if (sortBy === 'name-asc') filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

    dishesCounterText.textContent = `Mostrando ${filtered.length} de ${menuDishes.length} platos maestros con receta abierta`;

    filtered.forEach((dish, idx) => {
      const priceFormatted = `$${dish.price.toLocaleString('es-CO')} COP`;
      const card = document.createElement('article');
      card.className = 'dish-card reveal-item reveal-up';
      card.style.transitionDelay = `${(idx % 3) * 50}ms`;

      card.innerHTML = `
        <div class="dish-img-wrap">
          <img src="${dish.image}" alt="${dish.name}" class="dish-main-photo" loading="lazy" />
          <div class="dish-country-badge">
            <img src="${dish.flagUrl}" alt="Bandera" class="dish-flag-img" />
            <span>${dish.countryName}</span>
          </div>
          <span class="dish-number-tag">Plato #${idx + 1}</span>
          <span class="dish-price-badge">${priceFormatted}</span>
        </div>

        <div class="dish-body">
          <div class="dish-meta-pills">
            <span class="meta-pill">🌡️ ${dish.tempTech}</span>
            <span class="meta-pill">⏱️ ${dish.prepTime}</span>
          </div>
          <h3 class="dish-title">${dish.name}</h3>
          <p class="dish-summary">${dish.summary}</p>

          <div class="dish-actions-row">
            <button type="button" class="btn-small-action add-tray-btn" data-id="${dish.id}" data-type="Plato" data-name="${dish.name}" data-price="${dish.price}">
              ➕ Agregar a Degustación
            </button>
            <button type="button" class="btn-small-action go-pairing-btn" data-pairing="${dish.pairingId}">
              🍷 Ver Licor de Maridaje
            </button>
          </div>

          <button type="button" class="toggle-recipe-btn" aria-expanded="${allExpanded}" data-drawer="drawer-${dish.id}">
            <span>${allExpanded ? '🔼 Ocultar Origen y Receta' : '📖 Desplegar Origen, Ficha y Receta'}</span>
            <span>▼</span>
          </button>
        </div>

        <div class="recipe-drawer ${allExpanded ? 'open' : ''}" id="drawer-${dish.id}">
          <div class="recipe-tech-grid">
            <div><strong>Técnica:</strong><br/>${dish.tempTech}</div>
            <div><strong>Alérgenos:</strong><br/>${dish.allergens}</div>
            <div><strong>Maridaje Cava:</strong><br/>${dish.pairingName}</div>
          </div>
          <div class="recipe-block">
            <h4>🏛️ Origen Histórico y Cultural</h4>
            <p>${dish.origin}</p>
          </div>
          <div class="recipe-block">
            <h4>🥕 Ingredientes de Fórmula</h4>
            <ul>${dish.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
          <div class="recipe-block">
            <h4>👨‍🍳 Método Paso a Paso en Timmy's</h4>
            <ol>${dish.steps.map(s => `<li>${s}</li>`).join('')}</ol>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });

    observeRevealElements();
    bindDishEvents();
  }

  function bindDishEvents() {
    document.querySelectorAll('.toggle-recipe-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const drawer = document.getElementById(btn.getAttribute('data-drawer'));
        const isOpen = drawer.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        btn.querySelector('span:first-child').textContent = isOpen
          ? '🔼 Ocultar Origen y Receta'
          : '📖 Desplegar Origen, Ficha y Receta';
      });
    });

    document.querySelectorAll('.go-pairing-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        highlightLiquorInCava(btn.getAttribute('data-pairing'));
      });
    });

    document.querySelectorAll('.add-tray-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        addToTastingTray({
          id: btn.getAttribute('data-id'),
          type: btn.getAttribute('data-type'),
          name: btn.getAttribute('data-name'),
          price: Number(btn.getAttribute('data-price'))
        });
      });
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDishCategory = btn.getAttribute('data-filter');
      renderDishes();
    });
  });

  dishSearchInput.addEventListener('input', renderDishes);
  dishSortSelect.addEventListener('change', renderDishes);

  expandAllRecipesBtn.addEventListener('click', () => {
    allExpanded = !allExpanded;
    renderDishes();
  });

  /* ========================================================================
     5. RENDERIZADO DE LA CAVA DE LICORES Y MARIDAJES
     ======================================================================== */
  const liquorsGrid = document.getElementById('liquorsGrid');
  const sommelierSelector = document.getElementById('sommelierSelector');

  function renderLiquors(filter = 'all') {
    liquorsGrid.innerHTML = '';
    const filtered = filter === 'all'
      ? liquorsCatalog
      : liquorsCatalog.filter(l => l.category === filter);

    filtered.forEach(liq => {
      const card = document.createElement('article');
      card.className = 'liquor-card reveal-item reveal-up';
      card.id = `card-${liq.id}`;
      card.innerHTML = `
        <div class="liquor-top-bar">
          <span class="liquor-flag-pill">
            <img src="${liq.flagUrl}" alt="Bandera" class="mini-flag" />
            <span>${liq.countryName}</span>
          </span>
          <span class="liquor-abv">${liq.abv}</span>
        </div>
        <div class="liquor-img-frame">
          <img src="${liq.image}" alt="${liq.name}" loading="lazy" />
        </div>
        <h3 class="liquor-name">${liq.name}</h3>
        <p class="liquor-notes">${liq.notes}</p>

        <div class="tasting-meters">
          <div class="meter-row">
            <span>Cuerpo & Estructura</span>
            <div class="meter-track"><div class="meter-fill" style="--target-width: ${liq.bodyMeter}%"></div></div>
          </div>
          <div class="meter-row">
            <span>Crianza / Barrica</span>
            <div class="meter-track"><div class="meter-fill" style="--target-width: ${liq.oakMeter}%"></div></div>
          </div>
          <div class="meter-row">
            <span>Complejidad Aromática</span>
            <div class="meter-track"><div class="meter-fill" style="--target-width: ${liq.complexMeter}%"></div></div>
          </div>
        </div>

        <div class="liquor-footer-row">
          <span class="liquor-price">${liq.priceFormatted}</span>
          <button type="button" class="btn-small-action add-liq-tray-btn" data-id="${liq.id}" data-type="Cava/Licor" data-name="${liq.name}" data-price="${liq.price}">
            ➕ Elegir Licor
          </button>
        </div>
      `;
      liquorsGrid.appendChild(card);
    });

    observeRevealElements();

    document.querySelectorAll('.add-liq-tray-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        addToTastingTray({
          id: btn.getAttribute('data-id'),
          type: btn.getAttribute('data-type'),
          name: btn.getAttribute('data-name'),
          price: Number(btn.getAttribute('data-price'))
        });
      });
    });
  }

  function highlightLiquorInCava(liquorId) {
    renderLiquors('all');
    document.getElementById('cava-licores').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      document.querySelectorAll('.liquor-card').forEach(c => c.classList.remove('highlighted-pairing'));
      const targetCard = document.getElementById(`card-${liquorId}`);
      if (targetCard) targetCard.classList.add('highlighted-pairing');
    }, 650);
  }

  document.querySelectorAll('.liq-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.liq-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderLiquors(btn.getAttribute('data-liq-filter'));
    });
  });

  sommelierSelector.addEventListener('change', (e) => {
    if (e.target.value) highlightLiquorInCava(e.target.value);
  });

  /* ========================================================================
     6. BANDEJA DE DEGUSTACIÓN INTERCONECTADA CON RESERVAS
     ======================================================================== */
  const TRAY_KEY = 'timmys_tasting_tray_v3';
  const trayBackdrop = document.getElementById('trayBackdrop');
  const trayItemsList = document.getElementById('trayItemsList');
  const trayCountBadge = document.getElementById('trayCountBadge');
  const trayTotalValue = document.getElementById('trayTotalValue');

  function getTray() {
    const raw = localStorage.getItem(TRAY_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveTray(items) {
    localStorage.setItem(TRAY_KEY, JSON.stringify(items));
    renderTray();
  }

  function addToTastingTray(item) {
    const items = getTray();
    items.push({ ...item, uid: Date.now() + Math.random() });
    saveTray(items);
    trayBackdrop.classList.add('open');
  }

  function renderTray() {
    const items = getTray();
    trayCountBadge.textContent = items.length;
    const total = items.reduce((acc, item) => acc + item.price, 0);
    trayTotalValue.textContent = `$${total.toLocaleString('es-CO')} COP`;

    if (items.length === 0) {
      trayItemsList.innerHTML = `<p style="color:#4E5463;font-size:0.9rem;">Aún no has agregado ninguno de los 40 platos ni licores a tu selección.</p>`;
      return;
    }

    trayItemsList.innerHTML = items.map(item => `
      <div class="tray-item">
        <div>
          <strong>[${item.type}] ${item.name}</strong><br/>
          <span>$${item.price.toLocaleString('es-CO')} COP</span>
        </div>
        <button type="button" class="modal-close-btn remove-tray-item" data-uid="${item.uid}" style="width:28px;height:28px;font-size:1rem;">&times;</button>
      </div>
    `).join('');

    document.querySelectorAll('.remove-tray-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = Number(btn.getAttribute('data-uid'));
        saveTray(getTray().filter(i => i.uid !== uid));
      });
    });
  }

  document.getElementById('openTrayBtn').addEventListener('click', () => trayBackdrop.classList.add('open'));
  document.getElementById('closeTrayBtn').addEventListener('click', () => trayBackdrop.classList.remove('open'));
  trayBackdrop.addEventListener('click', (e) => {
    if (e.target === trayBackdrop) trayBackdrop.classList.remove('open');
  });
  document.getElementById('clearTrayBtn').addEventListener('click', () => saveTray([]));

  document.getElementById('transferToReservationBtn').addEventListener('click', () => {
    const items = getTray();
    const resNotes = document.getElementById('resNotes');
    if (items.length > 0 && resNotes) {
      const summaryText = items.map(i => `• ${i.type}: ${i.name} ($${i.price.toLocaleString('es-CO')})`).join('\n');
      resNotes.value = `Pre-Orden de Degustación Seleccionada:\n${summaryText}`;
    }
    trayBackdrop.classList.remove('open');
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  });

  /* ========================================================================
     7. PESTAÑAS INTERACTIVAS DEL CEO Y CARRUSEL
     ======================================================================== */
  document.querySelectorAll('.ceo-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ceo-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.ceo-tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`ceo-panel-${btn.getAttribute('data-ceo-tab')}`).classList.add('active');
    });
  });

  const slides = document.querySelectorAll('.carousel-slide');
  const dotsContainer = document.getElementById('carouselDots');
  let currentSlide = 0;

  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dot-btn ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot-btn');
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  document.getElementById('prevSlideBtn').addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('nextSlideBtn').addEventListener('click', () => goToSlide(currentSlide + 1));
  setInterval(() => goToSlide(currentSlide + 1), 5800);

  /* ========================================================================
     8. REGISTRO E INICIO DE SESIÓN REAL + COMENTARIOS Y RESERVAS
     ======================================================================== */
  const USERS_KEY = 'timmys_users_db_v3';
  const SESSION_KEY = 'timmys_active_session_v3';
  const authModalBackdrop = document.getElementById('authModalBackdrop');

  function getUsers() {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function getActiveUser() {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  function setActiveUser(user) {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
    updateUserInterface();
  }

  document.getElementById('openAuthModalBtn').addEventListener('click', () => authModalBackdrop.classList.add('open'));
  document.getElementById('closeAuthModalBtn').addEventListener('click', () => authModalBackdrop.classList.remove('open'));
  document.getElementById('inlineLoginTrigger').addEventListener('click', () => authModalBackdrop.classList.add('open'));

  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.getAttribute('data-tab') === 'loginTab';
      document.getElementById('loginForm').classList.toggle('active', isLogin);
      document.getElementById('registerForm').classList.toggle('active', !isLogin);
    });
  });

  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const city = document.getElementById('regCity').value.trim();
    const [flagCode, prefLabel] = document.getElementById('regPreference').value.split('|');
    const password = document.getElementById('regPassword').value;
    const feedback = document.getElementById('registerFeedback');

    if (!name || !phone || !email || password.length < 6) {
      feedback.style.color = '#D93444';
      feedback.textContent = '⚠️ Completa todos los campos y usa mínimo 6 caracteres.';
      return;
    }

    const users = getUsers();
    if (users.some(u => u.email === email)) {
      feedback.style.color = '#D93444';
      feedback.textContent = '⚠️ Este correo ya está registrado.';
      return;
    }

    const newUser = {
      id: Date.now(), name, phone, email, city, flagCode, preference: prefLabel, password,
      registeredAt: new Date().toLocaleDateString('es-CO')
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setActiveUser(newUser);
    feedback.style.color = '#007A70';
    feedback.textContent = '✅ Usuario registrado y sesión iniciada.';
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    const feedback = document.getElementById('loginFeedback');

    const user = getUsers().find(u => u.email === email && u.password === password);
    if (!user) {
      feedback.style.color = '#D93444';
      feedback.textContent = '❌ Credenciales incorrectas.';
      return;
    }
    setActiveUser(user);
  });

  document.getElementById('logoutBtn').addEventListener('click', () => setActiveUser(null));

  function updateUserInterface() {
    const user = getActiveUser();
    const users = getUsers();
    const authHeaderLabel = document.getElementById('authHeaderLabel');
    const guestView = document.getElementById('authGuestView');
    const profileView = document.getElementById('authProfileView');

    if (user) {
      authHeaderLabel.textContent = `👤 ${user.name.split(' ')[0]}`;
      guestView.hidden = true;
      profileView.hidden = false;

      document.getElementById('profileAvatar').textContent = user.name.charAt(0).toUpperCase();
      document.getElementById('profileNameDisplay').textContent = user.name;
      document.getElementById('profileEmailDisplay').textContent = user.email;
      document.getElementById('profilePhoneDisplay').textContent = user.phone;
      document.getElementById('profileCityDisplay').textContent = user.city;
      document.getElementById('profilePrefDisplay').innerHTML = `<img src="${FLAGS[user.flagCode || 'co']}" class="mini-flag" style="display:inline-block;vertical-align:middle;" /> ${user.preference}`;
      document.getElementById('profileDateDisplay').textContent = user.registeredAt;

      document.getElementById('commentAuthor').value = user.name;
      document.getElementById('resName').value = user.name;
      document.getElementById('resPhone').value = user.phone;

      document.getElementById('totalUsersCount').textContent = users.length;
      document.getElementById('registeredUsersList').innerHTML = users.map(u => `
        <li><img src="${FLAGS[u.flagCode || 'co']}" class="mini-flag" style="display:inline-block;vertical-align:middle;" /> <strong>${u.name}</strong> (${u.city}) - ${u.preference}</li>
      `).join('');
    } else {
      authHeaderLabel.textContent = 'Ingresar / Registro';
      guestView.hidden = false;
      profileView.hidden = true;
    }
  }

  const commentDishSelect = document.getElementById('commentDish');
  function populateCommentSelector() {
    const dishOptions = menuDishes.map(d => `<option value="Plato: ${d.name}">🍽️ ${d.name}</option>`).join('');
    const liqOptions = liquorsCatalog.map(l => `<option value="Cava: ${l.name}">🍷 ${l.name}</option>`).join('');
    commentDishSelect.innerHTML = `<optgroup label="40 Platos del Menú">${dishOptions}</optgroup><optgroup label="Cava & Licores">${liqOptions}</optgroup>`;
  }

  const COMMENTS_KEY = 'timmys_reviews_v3';
  const seedComments = [
    {
      author: 'Camila Restrepo', flagCode: 'co', verified: true,
      dish: 'Plato: 1. Bandeja Paisa de Autor "Estrella del Aburrá"', rating: 5,
      text: 'Tener 40 platos en carta con sus recetas completas e historia de origen es impresionante. Probamos la Bandeja Paisa de Autor y la Lechona en Piel de Cristal en La Estrella.',
      date: 'Hoy'
    },
    {
      author: 'Jean-Luc & Sofía Echeverri', flagCode: 'fr', verified: true,
      dish: 'Plato: 17. Tournedos Rossini con Trufa Negra del Périgord y Salsa Périgueux', rating: 5,
      text: 'Felicitaciones al CEO Andrés Julián Tobón Montoya. El Tournedos Rossini y el Risotto d\'Oro junto a la Cava de Licores son una joya en Antioquia.',
      date: 'Ayer'
    }
  ];

  function getComments() {
    const raw = localStorage.getItem(COMMENTS_KEY);
    if (!raw) {
      localStorage.setItem(COMMENTS_KEY, JSON.stringify(seedComments));
      return seedComments;
    }
    return JSON.parse(raw);
  }

  function renderComments() {
    const list = document.getElementById('commentsList');
    const comments = getComments();
    document.getElementById('commentsCount').textContent = comments.length;

    list.innerHTML = comments.map(c => `
      <article class="comment-item">
        <div class="comment-top">
          <div style="display:flex;align-items:center;gap:8px;font-weight:700;">
            <img src="${FLAGS[c.flagCode || 'co']}" alt="Bandera" class="mini-flag" />
            <span>${c.author}</span>
            ${c.verified ? '<span class="verified-badge">✓ Cliente Verificado</span>' : ''}
          </div>
          <span>${'⭐'.repeat(c.rating)} • <small>${c.date}</small></span>
        </div>
        <div style="font-size:0.8rem;font-weight:700;color:#FF4B5C;margin-bottom:6px;">${c.dish}</div>
        <p style="font-size:0.9rem;">${c.text}</p>
      </article>
    `).join('');
  }

  document.getElementById('commentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('commentAuthor').value.trim();
    const flagCode = document.getElementById('commentOriginFlag').value;
    const rating = Number(document.getElementById('commentRating').value);
    const dish = document.getElementById('commentDish').value;
    const text = document.getElementById('commentText').value.trim();

    if (!author || !text) return;

    const comments = getComments();
    comments.unshift({
      author, flagCode, verified: Boolean(getActiveUser()), dish, rating, text,
      date: new Date().toLocaleDateString('es-CO')
    });
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
    renderComments();
    document.getElementById('commentText').value = '';
  });

  document.getElementById('reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const date = document.getElementById('resDate').value;
    const guests = document.getElementById('resGuests').value;
    const sede = document.getElementById('resSede').value;
    const notes = document.getElementById('resNotes').value.trim();
    const feedback = document.getElementById('reservationFeedback');

    if (!name || !phone || !date) {
      feedback.style.color = '#D93444';
      feedback.textContent = '⚠️ Por favor completa nombre, celular y fecha de visita.';
      return;
    }

    feedback.style.color = '#007A70';
    feedback.innerHTML = `✅ <strong>Reserva registrada para ${name}</strong> (${guests} el ${date} en <em>${sede}</em>). <a href="https://wa.me/573000000000?text=${encodeURIComponent(`Hola Timmy's La Estrella, confirmo reserva a nombre de ${name} (${guests}) para el ${date} en ${sede}. Selección: ${notes}`)}" target="_blank" style="text-decoration:underline;color:#FF4B5C;font-weight:800;">Enviar orden completa por WhatsApp ahora →</a>`;
  });

  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('open');
  });

  document.querySelectorAll('.stat-number').forEach(el => {
    const target = Number(el.getAttribute('data-target'));
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 35);
  });

  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const ans = q.nextElementSibling;
      const isExp = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', !isExp);
      ans.style.maxHeight = isExp ? null : `${ans.scrollHeight}px`;
    });
  });

  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
  backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Inicialización Global
  renderDishes();
  renderLiquors();
  renderTray();
  populateCommentSelector();
  renderComments();
  updateUserInterface();
  observeRevealElements();
});