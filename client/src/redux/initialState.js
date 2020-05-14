export const initialState = {
  products: [
    {
      id: 0,
      name: 'Buty robocze',
      description: 'Buty URGENT 112 OB, materiał:  skóra, typ: kozak. Trzewik zabezpieczony metalowym podnoskiem ( podstawowa ochrona ). Cholewka wykonana ze skóry typu "buffalo" o grubości nie mniejszej niż 1,6 mm, wewnątrz wyściółka ocieplająca. Podeszwa zewnętrzna i wewnętrzna jest wykonana z PU/PU (dwie różne gęstości poliuretanu), podeszwa zewnętrzna jest twardsza , wewnętrzna bardziej miękka.',
      price: 180,
      image: 'photo1111.jpg',
    },
    {
      id: 1,
      name: 'Czapka LED',
      description: 'Czapka z wbudowaną latarką LED ładowana USB, czarna, w rozmiarze uniwersalnym. Świetnie sprawdzi się nie tylko podczas pracy w ciężkich warunkach, ale także: podczas wędkowania lub turystyki o zmroku, jazdy na rowerze wieczorem, podczas wykonywania różnych prac przy samochodzie, w trakcie poszukiwań przedmiotów w ciemnym i chłodnym magazynie. Czapka wykonana jest z ciepłej dzianiny. Latarka posiada 3 tryby świecenia i czas pracy do 4 godzin na jednym ładowaniu: jasne światło, przyciemnione światło, pulsujące światło.',
      price: 40,
      image: 'photo1112.jpg',
    },
    {
      id: 2,
      name: 'Spodnie Brixton',
      description: 'Spodnie do pasa ze wzmocnieniem z tyłu w miejscu naraonym na przetarcia. Spodnie posiadają kolorystyczne wstawki oraz podwójne i potrójne szwy, szyte wzmocnioną nicią. Produkt wykonany z wysokiej jakości materiału, który zapewnia po wielokrotnym praniu stabilność kolorów i rozmiarów.',
      price: 400,
      image: 'photo1113.jpg',
    },
    {
      id: 3,
      name: 'Kombinezon roboczy',
      description: 'Kombinezon wykonany został z materiału poliestrowo-bawełnianego o gramaturze 270 g/m². Cechuje się on wysoką odpornością mechaniczną. Stanowi doskonałe zabezpieczenie przed urazami naskórka oraz chroni przed zabrudzeniem odzieży roboczej. Ochronny kombinezon jednoczęściowy został wzmocniony poliestrem 6000D. Zapina się na suwak błyskawiczny kryty patką. Sprzyja to łatwemu zakładaniu i zdejmowaniu kombinezonu. Zaletą produktu jest to, że nie ogranicza ruchów, ale sprzyja ich swobodzie. Obecność wielu różnorodnych kieszeni wpływa na funkcjonalność kombinezonu roboczego BHP. Kombinezon roboczy jednoczęściowy polecany jest głównie dla mechaników. ',
      price: 160,
      image: 'photo1114.jpg',
    },
    {
      id: 4,
      name: 'Bezrękawnik',
      description: 'Bezrękawnik ocieplany "puchacz" wykonany z wysokiej jakości materiału, gdzie zewnętrzna powłoka to 100% poliester micro-moss. Zapinanie na suwak, a pod spodem podwójna warstwa ociepliny 100% polister 300g/m2. Zastosowanie: zarówno do pracy jak i do codziennego użytku.',
      price: 140,
      image: 'photo1115.jpg',
    },
    {
      id: 5,
      name: 'Nauszniki optime',
      description: 'Nauszniki przeciwhałasowe Peltor OPTIME III przeznaczone są do ochrony przed bardzo dużym poziomem hałasu występującym np. na lotniskach, w kopalniach, siłowniach okrętowych, w energetyce. Budowa nauszników OPTIME III opiera się na technologii wykorzystującej podwójną obudowę, która minimalizuje rezonans w obudowie uchwytu. Zapewnia to maksymalne tłumienie dźwięków o wysokich częstotliwościach i jednocześnie umożliwia zrozumienie rozmowy i wydawanych poleceń.',
      price: 140,
      image: 'photo1116.jpg',
    },
    {
      id: 6,
      name: 'Okulary Dakota',
      description: 'Wygodne przeciwodpryskowe okulary ochronne o sportowym wzornictwie.Okulary te zapewniają komfort oraz bezpieczeństwo podczas prac remontowo-budowlanych. Produkt zaprojektowano tak, aby przysłaniał sporą powierzchnię twarzy, dzięki czemu odpryski i inne niebezpieczne elementy nie dostaną się do wrażliwych stref wokół oczu.',
      price: 70,
      image: 'photo1117.jpg',
    },
    {
      id: 7,
      name: 'Zestaw Master',
      description: 'Ubranie ochronne typu Master w skład którego wchodzi bluza i spodnie ogrodniczki: 65% poliester, 35% bawełna. Bluza zapinana na guziki, na frontowej stronie dwie kieszenie zapinane na rzep, mankiety przy rękawach zapinane na guzik, na dole gumka ściągająca, dzięki czemu bluza nie odstaje i zabezpiecza przed wiatrem. Spodnie ogrodniczki: możliwość regulacji w pasie dzięki dodatkowym guzikom oraz w długości szelkami, które to dodatkowo mają w tylnej partii gumkę, dwie boczne kieszenie oraz jedną na nogawce.',
      price: 240,
      image: 'photo1118.jpg',
    },
  ],
  loading: {
    active: false,
    error: false,
  },
};
