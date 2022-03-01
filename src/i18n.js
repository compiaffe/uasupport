import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Transport: 'Transport',
      Name: 'Name',
      Address: 'Address',
      Date: 'Date',
      People: 'People',
      Verified: 'Verified',
      Phone: 'Phone',
      Email: 'Email',
      TransportDescription: 'Additional description',
      Status: 'Status',
      szukam: 'Looking',
      dam: 'Offer',
      'all-statuses': 'Wszystkie Statusy',
      AddTransport: 'Add Transport',
      GetTransport: 'Get Transport',
      SzczegolyTransportu: 'Want Transport',
      DodajTransport: 'Add Transport',
      SzukajTransport: 'Look for transport',
      'Field required': 'Field is required',
      PositiveNumberError: 'Number has to be positive',
      IntegerNumberError: 'Number has to be integer',
      TooShort: 'Too short',
      TooLong: 'Too long',
      'Invalid Email': 'Invalid email',
      'Invalid URL': 'Invalid URL',
      Cancel: 'Cancel',
      'Form Invalid': 'Form is invalid',
      'Form Invalid - Social': 'You have to add at least one contact type (email, phone, FB)',
      PickLocation: 'Click on map to pick a location',
      selected: 'selected',
      'Szukaj zakwaterowania': 'Look for accommodation...',
      'Szukaj transport': 'Look for transport...',
      'Szukaj pomocy': 'Look for aid center...',
      'Filter list': 'Filter results',
      'Clear filter': 'Clear filter',
      'Clear location': 'Clear location',
      SzczegolyZakwaterowania: 'Accommodation Details',
      'Wyjazd-od': 'Departure',
      'Jade-z': 'Lift from',
      'Jade-do': 'Lift to',
      'Mieszkanie-adres': 'Address',
      CheckIn: 'Checkin from',
      Homes: 'Accommodations',
      AddHome: 'Offer accommodation',
      GetHome: 'Looking for accommodation',
      'Not found': 'Not found',
      'No results found for your query, please consider to change it in order to see more.':
        'There is not results matching your query.',
      Aids: 'Aid Centers',
      AddAid: 'Add Aid Center',
      HealthAids: 'Medical Aid Centers',
      HealthAddAid: 'Add Medical Aid Center',
      'Aid-address': 'Aid Center Address',
      AidName: 'Name',
      AidType: 'Aid Type',
      'health-aid': 'Medyczna Aid',
      'medical-aid': 'Medical Assistance',
      'law-aid': 'Legal Assistance',
      'animal-aid': 'Animal Aid',
      'blood-aid': 'Blood Donation',
      'psych-aid': 'Psychological Help',
      'translate-aid': "Translator's help",
      'food-aid': 'Food',
      'standard-aid': 'Material Aid',
      'all-aid': 'All',
      SzczegolyPomocy: 'Aid Details',
      AddressHomeDesc: 'Address - description',
      AddressAidDesc: 'Address - description',
      'Pomoc UA': 'Help UA',
      'Search for fundraising': 'Search for Fundraising...',
      Fundraising: 'List of funds',
      'Fund-address': 'Fund address',
      Latest: 'Newest',
      Oldest: 'Oldest',
      SzczegolyZbiorki: 'Fund Details',
      'Mieszkanie-zwierze': 'Pets',
      'Mieszkanie-dzieci': 'Children',
      'Mieszkanie-disability': 'Important for people with disabilities',
      'Mieszkanie-transport': 'Transport',
      'Mieszkanie-czas': 'For how long?',
      Tak: 'Yes',
      Nie: 'No',
      Zobacz: 'Details',
      Edytuj: 'Edit',
      'Zobacz wszystkie': 'See All',
      'Tylko zweryfikowane profile': 'Only verified profiles',
      'Osoby od': 'People from',
      'Osoby do': 'People to',
      Filter: 'Filter',
      'Zbiórki Pieniędzy': 'Fundraising',
      Zakwaterowanie: 'Accommodation',
      'Centra Pomocy': 'Aid Centers',
      'Separate Bath': 'Separate Bath',
      'Kitchen Access': 'Kitchen Access',
      Dostępne: 'Available now'
    }
  },
  pl: {
    translation: {
      Transport: 'Transport',
      Name: 'Imię',
      Address: 'Adres',
      AddressDesc: 'Adres Odbioru - opis',
      AddressToDesc: 'Jadę do... - opis',
      Date: 'Data',
      Car: 'Samochód - rodzaj',
      People: 'Osoby',
      Verified: 'Zweryfikowany',
      Phone: 'Telefon',
      Email: 'Email',
      TransportDescription: 'Dodatkowy opis',
      Status: 'Status',
      szukam: 'Szukam',
      dam: 'Oferuję',
      'all-statuses': 'Wszystkie Statusy',
      AddTransport: 'Oferuję Transport',
      GetTransport: 'Szukam Transportu',
      SzczegolyTransportu: 'Szczegóły Transportu',
      DodajTransport: 'Dodaj Transport',
      SzukajTransport: 'Szukaj Transportu',
      'Field required': 'Pole jest wymagane',
      PositiveNumberError: 'Liczba musi być dodatnia',
      IntegerNumberError: 'Liczba musi być całkowita',
      TooShort: 'Zbyt krótkie',
      TooLong: 'Za długie',
      'Invalid Email': 'Niepoprawny format email',
      'Invalid URL': 'Niepoprawny format URL',
      Cancel: 'Anuluj',
      'Form Invalid': 'Formularz nie został wypełniony poprawnie',
      'Form Invalid - Social':
        'Musisz podać przynajmniej jedną formę kontaktu (email, telefon, FB)',
      PickLocation: 'Kliknij na mapę aby wskazać dokładną lokalizację',
      selected: 'zaznaczone',
      'Szukaj zakwaterowania': 'Szukaj zakwaterowania...',
      'Szukaj transport': 'Szukaj transport...',
      'Szukaj pomocy': 'Szukaj centrum...',
      'Filter list': 'Filtruj wyniki',
      'Clear filter': 'Wyczyść filter',
      'Clear location': 'Wyczyść lokalizację',
      SzczegolyZakwaterowania: 'Szczegóły Zakwaterowania',
      'Wyjazd-od': 'Wyjazd',
      'Jade-z': 'Jadę z',
      'Jade-do': 'Jadę do',
      'Mieszkanie-adres': 'Adres mieszkania',
      CheckIn: 'Przyjazd od',
      Homes: 'Zakwaterowania',
      AddHome: 'Oferuję Zakwaterowanie',
      GetHome: 'Szukam Zakwaterowania',
      'Not found': 'Nie znaleziono',
      'No results found for your query, please consider to change it in order to see more.':
        'Nie znaleziono wyników dla twojego zapytania, zmień zapytanie aby zobaczyć więcej wyników.',
      Aids: 'Centra Pomocy',
      AddAid: 'Dodaj Centrum Pomocy',
      HealthAids: 'Centra Pomocy Medycznej',
      HealthAddAid: 'Dodaj Centrum Pomocy Medycznej',
      'Aid-address': 'Adres centra pomocy',
      AidName: 'Nazwa',
      AidType: 'Typ Pomocy',
      'health-aid': 'Zbiórka Medyczna',
      'medical-aid': 'Pomoc Medyczna',
      'law-aid': 'Pomoc Prawna',
      'animal-aid': 'Pomoc Zwierzętom',
      'blood-aid': 'Zbiórka Krwi',
      'psych-aid': 'Pomoc Psychologiczna',
      'translate-aid': 'Pomoc Tłumacza',
      'food-aid': 'Darmowa Żywność',
      'standard-aid': 'Zbiórka Rzeczowa',
      'all-aid': 'Dowolna Pomoc',
      SzczegolyPomocy: 'Szczegóły Pomocy',
      AddressHomeDesc: 'Adres Mieszkania - opis',
      AddressAidDesc: 'Adres Centrum - opis',
      'Pomoc UA': 'Pomoc UA',
      'Search for fundraising': 'Wyszukaj Zbiórki...',
      Fundraising: 'Lista Zbiórek',
      'Fund-address': 'Adres funduszu',
      Latest: 'Najnowsze',
      Oldest: 'Najstarsze',
      SzczegolyZbiorki: 'Szczegóły Zbiórki',
      'Mieszkanie-zwierze': 'Zwierzęta',
      'Mieszkanie-dzieci': 'Dzieci',
      'Mieszkanie-disability': 'Ważne dla osób z niepełnosprawnościami',
      'Mieszkanie-transport': 'Transport',
      'Mieszkanie-czas': 'Na jak długo',
      Tak: 'Tak',
      Nie: 'Nie',
      Zobacz: 'Zobacz',
      Edytuj: 'Edytuj',
      'Zobacz wszystkie': 'Zobacz wszystkie',
      'Tylko zweryfikowane profile': 'Tylko zweryfikowane profile',
      'Osoby od': 'Osoby od',
      'Osoby do': 'Osoby do',
      Filter: 'Filter',
      'Zbiórki Pieniędzy': 'Zbiórki Pieniędzy',
      Zakwaterowanie: 'Zakwaterowanie',
      'Centra Pomocy': 'Centra Pomocy',
      'Separate Bath': 'Oddzielna łazienka',
      'Kitchen Access': 'Dostęp do kuchni',
      Dostępne: 'Już Dostępne'
    }
  },
  ua: {
    translation: {
      Transport: 'Транспорт',
      Name: "Ім'я",
      Address: 'Адреса',
      AddressDesc: 'Адреса самовивезення - опис',
      AddressToDesc: 'Я збираюся ... - опис',
      Date: 'Дата',
      Car: 'Автомобіль - тип',
      People: 'Особи',
      Verified: 'Перевірено',
      Phone: 'Телефон',
      Email: 'Електронна пошта',
      TransportDescription: 'Додатковий опис',
      Status: 'Статус',
      szukam: 'Я шукаю',
      dam: 'я пропоную',
      'all-statuses': 'Усі статуси',
      AddTransport: 'Пропоную транспорт',
      GetTransport: 'Шукаю Транспорт',
      SzczegolyTransportu: 'Деталі транспорту',
      DodajTransport: 'Додати транспорт',
      SzukajTransport: 'Пошук транспорту',
      'Field required': 'Поле є обов’язковим',
      PositiveNumberError: 'Число має бути додатним',
      IntegerNumberError: 'Число має бути цілим числом',
      TooShort: 'Занадто короткий',
      TooLong: 'Надто довго',
      'Invalid Email': 'Недійсний формат електронної пошти',
      'Invalid URL': 'Недійсний формат URL-адреси',
      Cancel: 'Скасувати',
      'Form Invalid': 'Форма заповнена неправильно',
      'Form Invalid - Social':
        'Ви повинні вказати принаймні одну форму контакту (електронна пошта, телефон, FB)',
      PickLocation: 'Натисніть на карту, щоб показати точне місце розташування',
      selected: 'перевірено',
      'Szukaj zakwaterowania': 'Шукати житло...',
      'Szukaj transport': 'Шукати транспорт...',
      'Szukaj pomocy': 'центр пошуку...',
      'Filter list': 'Відфільтруйте результати',
      'Clear filter': 'Очистіть фільтр',
      'Clear location': 'Очистити місце розташування',
      SzczegolyZakwaterowania: 'Деталі проживання',
      'Wyjazd-od': 'Поїздка',
      'Jade-z': 'я йду з',
      'Jade-do': 'я збираюся',
      'Mieszkanie-adres': 'Адреса квартири',
      CheckIn: 'Квартира від',
      Homes: 'Проживання',
      AddHome: 'Пропоную житло',
      GetHome: 'Шукаю житло',
      'Not found': 'Не знайдено',
      'No results found for your query, please consider to change it in order to see more.':
        'За вашим запитом не знайдено результатів. Змініть запит, щоб побачити більше результатів.',
      Aids: 'Довідкові центри',
      AddAid: 'Додайте довідковий центр',
      HealthAids: 'Центри медичної допомоги',
      HealthAddAid: 'Додати центр медичної допомоги',
      'Aid-address': 'Адреса довідкового центру',
      AidName: "ім'я",
      AidType: 'Тип довідки',
      'health-aid': 'Медичний збірник',
      'medical-aid': 'Медична допомога',
      'law-aid': 'Юридична допомога',
      'animal-aid': 'Допоможіть тваринам',
      'blood-aid': 'Донорство крові',
      'psych-aid': 'Психологічна допомога',
      'translate-aid': 'Допомога перекладача',
      'food-aid': 'Безкоштовна їжа',
      'standard-aid': 'Збір матеріалів',
      'all-aid': 'Будь-яка допомога',
      SzczegolyPomocy: 'Деталі довідки',
      AddressHomeDesc: 'Адреса квартири - опис',
      AddressAidDesc: 'Адреса центру - опис',
      'Pomoc UA': 'Допоможіть UA',
      'Search for fundraising': 'Пошук підборів...',
      Fundraising: 'Список колекції',
      'Fund-address': 'Адреса фонду',
      Latest: 'Останні',
      Oldest: 'Найстаріший',
      SzczegolyZbiorki: 'Деталі колекції',
      'Mieszkanie-zwierze': 'Тварини',
      'Mieszkanie-dzieci': 'Діти',
      'Mieszkanie-disability': 'Важливо для людей з обмеженими можливостями',
      'Mieszkanie-transport': 'Транспорт',
      'Mieszkanie-czas': 'Як довго',
      Tak: 'Так',
      Nie: 'ні',
      Zobacz: 'дивись',
      Edytuj: 'Редагувати',
      'Zobacz wszystkie': 'бачити все',
      'Tylko zweryfikowane profile': 'Тільки перевірені профілі',
      'Osoby od': 'Люди з',
      'Osoby do': 'Люди до',
      Filter: 'Фільтр',
      'Zbiórki Pieniędzy': 'Збір коштів',
      Zakwaterowanie: 'Проживання',
      'Centra Pomocy': 'Довідкові центри',
      'Separate Bath': 'Окрема ванна кімната',
      'Kitchen Access': 'Доступ до кухні',
      Dostępne: 'Зараз доступний'
    }
  },
  ru: {
    translation: {
      Transport: 'Транспорт',
      Name: 'Имя',
      Address: 'Адрес',
      AddressDesc: 'Адрес получения - описание',
      AddressToDesc: 'Я собираюсь ... - описание',
      Date: 'Дата',
      Car: 'Тип автомобиля',
      People: 'лица',
      Verified: 'проверено',
      Phone: 'телефон',
      Email: 'Эл. почта',
      TransportDescription: 'Дополнительное описание',
      Status: 'Положение дел',
      szukam: 'Я ищу',
      dam: 'я предлагаю',
      'all-statuses': 'Все статусы',
      AddTransport: 'Я предлагаю Транспорт',
      GetTransport: 'Я ищу Транспорт',
      SzczegolyTransportu: 'Детали транспорта',
      DodajTransport: 'Добавить транспорт',
      SzukajTransport: 'Поиск транспорта',
      'Field required': 'Поле обязательно',
      PositiveNumberError: 'число должно быть положительным',
      IntegerNumberError: 'Число должно быть целым',
      TooShort: 'Слишком коротко',
      TooLong: 'Слишком долго',
      'Invalid Email': 'Неверный формат электронной почты',
      'Invalid URL': 'Неверный формат URL',
      Cancel: 'Отмена',
      'Form Invalid': 'Форма заполнена неправильно',
      'Form Invalid - Social':
        'Вы должны указать хотя бы одну форму контакта (электронная почта, телефон, FB)',
      PickLocation: 'Нажмите на карту, чтобы показать точное местоположение',
      selected: 'проверил',
      'Szukaj zakwaterowania': 'Искать жилье...',
      'Szukaj transport': 'Поиск транспорта...',
      'Szukaj pomocy': 'Поисковый центр...',
      'Filter list': 'Отфильтруйте результаты',
      'Clear filter': 'Очистите фильтр',
      'Clear location': 'Очистить место',
      SzczegolyZakwaterowania: 'Детали проживания',
      'Wyjazd-od': 'Путешествие',
      'Jade-z': 'я иду с',
      'Jade-do': 'я собираюсь',
      'Mieszkanie-adres': 'Адрес квартиры',
      CheckIn: 'Прибытие из',
      Homes: 'Жилье',
      AddHome: 'я предлагаю проживание',
      GetHome: 'ищу жилье',
      'Not found': 'Не найден',
      'No results found for your query, please consider to change it in order to see more.':
        'По вашему запросу ничего не найдено. Измените запрос, чтобы увидеть больше результатов.',
      Aids: 'Справочные центры',
      AddAid: 'Добавить справочный центр',
      HealthAids: 'Центры медицинской помощи',
      HealthAddAid: 'Добавить медицинский центр',
      'Aid-address': 'Адрес справочного центра',
      AidName: 'имя',
      AidType: 'Тип справки',
      'health-aid': 'Медицинская коллекция',
      'medical-aid': 'Медицинская помощь',
      'law-aid': 'Юридическая помощь',
      'animal-aid': 'Помогите животным',
      'blood-aid': 'Донорство крови',
      'psych-aid': 'Психологическая помощь',
      'translate-aid': 'Помощь переводчика',
      'food-aid': 'Бесплатное питание',
      'standard-aid': 'Сбор материалов',
      'all-aid': 'Любая помощь',
      SzczegolyPomocy: 'Детали справки',
      AddressHomeDesc: 'Адрес квартиры - описание',
      AddressAidDesc: 'Адрес центра - описание',
      'Pomoc UA': 'Помощь UA',
      'Search for fundraising': 'Искать отскоки...',
      Fundraising: 'Список коллекций',
      'Fund-address': 'Адрес фонда',
      Latest: 'Самый последний',
      Oldest: 'Старейший',
      SzczegolyZbiorki: 'Детали коллекции',
      'Mieszkanie-zwierze': 'Животные',
      'Mieszkanie-dzieci': 'Дети',
      'Mieszkanie-disability': 'Важно для людей с ограниченными возможностями',
      'Mieszkanie-transport': 'Транспорт',
      'Mieszkanie-czas': 'Как долго',
      Tak: 'да',
      Nie: 'Нет',
      Zobacz: 'Смотреть',
      Edytuj: 'Редактировать',
      'Zobacz wszystkie': 'увидеть все',
      'Tylko zweryfikowane profile': 'Только проверенные профили',
      'Osoby od': 'Люди из',
      'Osoby do': 'Люди, чтобы',
      Filter: 'Фильтр',
      'Zbiórki Pieniędzy': 'Сбор средств',
      Zakwaterowanie: 'Жилье',
      'Centra Pomocy': 'Справочные центры',
      'Separate Bath': 'Отдельная ванная',
      'Kitchen Access': 'Доступ на кухню',
      Dostępne: 'Теперь доступно'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pl', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
