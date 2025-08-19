import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const CasesSection = () => {
  const cases = [
    {
      id: 1,
      title: 'Доставка автовозом 10 BMW X5 в Москву',
      client: 'Автодилер',
      route: 'Хэйхэ → Москва',
      duration: '8 дней',
      truckType: 'Автовоз',
      value: '2,8 млн ₽',
      image: '/api/placeholder/400/300',
      description: 'Успешная доставка премиальных автомобилей с полным страхованием каждого авто.',
      features: ['Закрытый автовоз', 'Страхование 100%', 'Фото-отчёты']
    },
    {
      id: 2,
      title: 'Рефрижератором 20 тонн морепродуктов в СПб',
      client: 'Импортёр продуктов',
      route: 'Хэйхэ → СПб',
      duration: '10 дней',
      truckType: 'Рефрижератор',
      value: '1,2 млн ₽',
      image: '/api/placeholder/400/300',
      description: 'Соблюдение температурного режима -18°C на протяжении всего маршрута.',
      features: ['Контроль t°', 'CMR страхование', 'Сертификаты ХАССП']
    },
    {
      id: 3,
      title: 'Тралом негабаритное оборудование 45 тонн',
      client: 'Производственная компания',
      route: 'Хэйхэ → Екатеринбург',
      duration: '7 дней',
      truckType: 'Трал',
      value: '890 000 ₽',
      image: '/api/placeholder/400/300',
      description: 'Перевозка промышленного оборудования с сопровождением ГИБДД.',
      features: ['Сопровождение ГИБДД', 'Низкорамный трал', 'Разрешения получены']
    }
  ]

  const stats = [
    { number: '4 300', label: 'успешных рейсов в год', icon: 'Truck' },
    { number: '98%', label: 'довольных клиентов', icon: 'Star' },
    { number: '8', label: 'лет безупречной работы', icon: 'Award' },
    { number: '180', label: 'единиц собственной техники', icon: 'Package' }
  ]

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Реальные кейсы доставки</h2>
          <p className="text-xl text-gray-600">
            Фото-отчёты, видео и документы наших успешных перевозок
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="ImageIcon" size={48} className="text-primary/50" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-secondary text-primary">
                    {caseItem.truckType}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {caseItem.value}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{caseItem.client}</span>
                    <span className="text-sm font-medium text-secondary">{caseItem.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {caseItem.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{caseItem.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Icon name="MapPin" size={16} className="mr-1" />
                    {caseItem.route}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseItem.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-secondary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Смотреть отчёт
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Цифры, которым доверяют</h3>
            <p className="text-gray-600">Результаты 8 лет работы в сфере международных перевозок</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Icon name={stat.icon as any} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time activity feed */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Лента активности</h3>
            <p className="text-gray-600">Актуальная информация о бронированиях</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm text-gray-700">
                    <strong>Только что забронирован</strong> реф 86 м³ до Новосибирска
                  </span>
                </div>
                <span className="text-xs text-gray-500">2 мин назад</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    Автовоз до Москвы отправился из Хэйхэ
                  </span>
                </div>
                <span className="text-xs text-gray-500">15 мин назад</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">
                    Трал 60 т прошёл таможню в Благовещенске
                  </span>
                </div>
                <span className="text-xs text-gray-500">1 час назад</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CasesSection