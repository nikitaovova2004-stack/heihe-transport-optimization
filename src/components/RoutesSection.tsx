import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const RoutesSection = () => {
  const routes = [
    { 
      from: 'Хэйхэ', 
      to: 'Москва', 
      duration: '8 дней', 
      price: '220 000', 
      color: 'bg-red-500',
      description: 'Самый популярный маршрут для бизнеса',
      truckTypes: ['Тент', 'Реф', 'Автовоз'],
      slug: 'heihe-moscow-ftl'
    },
    { 
      from: 'Хэйхэ', 
      to: 'Казань', 
      duration: '9 дней', 
      price: '195 000', 
      color: 'bg-blue-500',
      description: 'Рефрижератором до столицы Татарстана',
      truckTypes: ['Реф', 'Тент'],
      slug: 'heihe-kazan-refrigerator'
    },
    { 
      from: 'Хэйхэ', 
      to: 'Екатеринбург', 
      duration: '7 дней', 
      price: '185 000', 
      color: 'bg-green-500',
      description: 'Автовозом до столицы Урала',
      truckTypes: ['Автовоз', 'Тент'],
      slug: 'heihe-ekaterinburg-avto'
    },
    { 
      from: 'Хэйхэ', 
      to: 'Новосибирск', 
      duration: '6 дней', 
      price: '165 000', 
      color: 'bg-purple-500',
      description: 'Быстрая доставка в Сибирь',
      truckTypes: ['Тент', 'Трал'],
      slug: 'heihe-novosibirsk-express'
    },
    { 
      from: 'Хэйхэ', 
      to: 'СПб', 
      duration: '10 дней', 
      price: '245 000', 
      color: 'bg-orange-500',
      description: 'До северной столицы России',
      truckTypes: ['Реф', 'Тент'],
      slug: 'heihe-spb-refrigerator'
    },
    { 
      from: 'Хэйхэ', 
      to: 'Челябинск', 
      duration: '8 дней', 
      price: '175 000', 
      color: 'bg-teal-500',
      description: 'Промышленный центр Урала',
      truckTypes: ['Трал', 'Тент'],
      slug: 'heihe-chelyabinsk-tral'
    }
  ]

  return (
    <section id="routes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Популярные маршруты</h2>
          <p className="text-xl text-gray-600">Регулярные рейсы из Хэйхэ в крупнейшие города России</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${route.color}`}></div>
                  <span className="text-gray-600 text-sm">{route.from}</span>
                  <Icon name="ArrowRight" size={16} className="text-gray-400" />
                  <span className="font-semibold text-primary text-lg">{route.to}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{route.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {route.truckTypes.map((type, typeIndex) => (
                  <span 
                    key={typeIndex}
                    className="px-2 py-1 bg-secondary/10 text-primary text-xs rounded-md font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Срок доставки</div>
                  <div className="text-lg font-semibold text-primary">{route.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">FTL от</div>
                  <div className="text-xl font-bold text-secondary">{route.price} ₽</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold"
                >
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать точную стоимость
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать машину
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoutesSection