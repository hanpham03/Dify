const translation = {
  title: 'Логирование',
  description: 'В логах записывается состояние работы приложения, включая пользовательский ввод и ответы ИИ.',
  dateTimeFormat: 'DD.MM.YYYY HH:mm',
  table: {
    header: {
      updatedTime: 'Время обновления',
      time: 'Время создания',
      endUser: 'Конечный пользователь или аккаунт',
      input: 'Ввод',
      output: 'Вывод',
      summary: 'Заголовок',
      messageCount: 'Количество сообщений',
      userRate: 'Оценка пользователя',
      adminRate: 'Оценка оп.',
      startTime: 'ВРЕМЯ НАЧАЛА',
      status: 'СТАТУС',
      runtime: 'ВРЕМЯ ВЫПОЛНЕНИЯ',
      tokens: 'ТОКЕНЫ',
      user: 'Конечный пользователь или аккаунт',
      version: 'ВЕРСИЯ',
    },
    pagination: {
      previous: 'Предыдущий',
      next: 'Следующий',
    },
    empty: {
      noChat: 'Еще нет чатов',
      noOutput: 'Нет вывода',
      element: {
        title: 'Есть кто-нибудь?',
        content: 'Наблюдайте и аннотируйте взаимодействия между конечными пользователями и приложениями ИИ здесь, чтобы постоянно повышать точность ИИ. Вы можете попробовать <shareLink>поделиться</shareLink> или <testLink>протестировать</testLink> веб-приложение самостоятельно, а затем вернуться на эту страницу.',
      },
    },
  },
  detail: {
    time: 'Время',
    conversationId: 'Идентификатор разговора',
    promptTemplate: 'Шаблон подсказки',
    promptTemplateBeforeChat: 'Шаблон подсказки перед чатом · Как системное сообщение',
    annotationTip: 'Улучшения, отмеченные {{user}}',
    timeConsuming: '',
    second: 'с',
    tokenCost: 'Потрачено токенов',
    loading: 'загрузка',
    operation: {
      like: 'лайк',
      dislike: 'дизлайк',
      addAnnotation: 'Добавить улучшение',
      editAnnotation: 'Редактировать улучшение',
      annotationPlaceholder: 'Введите ожидаемый ответ, который вы хотите получить от ИИ, который может быть использован для тонкой настройки модели и постоянного улучшения качества генерации текста в будущем.',
    },
    variables: 'Переменные',
    uploadImages: 'Загруженные изображения',
  },
  filter: {
    period: {
      today: 'Сегодня',
      last7days: 'Последние 7 дней',
      last4weeks: 'Последние 4 недели',
      last3months: 'Последние 3 месяца',
      last12months: 'Последние 12 месяцев',
      monthToDate: 'С начала месяца',
      quarterToDate: 'С начала квартала',
      yearToDate: 'С начала года',
      allTime: 'Все время',
    },
    annotation: {
      all: 'Все',
      annotated: 'Аннотированные улучшения ({{count}} элементов)',
      not_annotated: 'Не аннотировано',
    },
    sortBy: 'Сортировать по:',
    descending: 'по убыванию',
    ascending: 'по возрастанию',
  },
  workflowTitle: 'Журналы рабочих процессов',
  workflowSubtitle: 'Журнал записал работу Automate.',
  runDetail: {
    title: 'Журнал разговоров',
    workflowTitle: 'Подробная информация о журнале',
    fileListLabel: 'Сведения о файле',
    fileListDetail: 'Подробность',
  },
  promptLog: 'Журнал подсказок',
  agentLog: 'Журнал агента',
  viewLog: 'Просмотреть журнал',
  agentLogDetail: {
    agentMode: 'Режим агента',
    toolUsed: 'Использованный инструмент',
    iterations: 'Итерации',
    iteration: 'Итерация',
    finalProcessing: 'Окончательная обработка',
  },
}

export default translation