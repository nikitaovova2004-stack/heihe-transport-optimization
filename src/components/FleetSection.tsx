import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const FleetSection = () => {
  const truckTypes = [
    { 
      value: 'tent', 
      label: 'Тент', 
      capacity: '82-120 м³, 20-22 т', 
      icon: 'Package',
      description: 'Тентованные полуприцепы для генеральных грузов',
      specs: ['Объём: 82-120 м³', 'Грузоподъёмность: 20-22 т', 'Фиксированная ставка'],
      count: 65
    },
    { 
      value: 'ref', 
      label: 'Рефрижератор', 
      capacity: '86 м³, -20°C ... +25°C', 
      icon: 'Snowflake',
      description: 'Рефрижераторные установки для скоропорта',
      specs: ['Объём: 86 м³', 'Температура: -20°C ... +25°C', 'Контроль температуры 24/7'],
      count: 45
    },
    { 
      value: 'carrier', 
      label: 'Автовоз', 
      capacity: '8-10 легковых', 
      icon: 'Car',
      description: 'Автовозы для перевозки легковых автомобилей',
      specs: ['Вместимость: 8-10 авто', 'Закрытый тип', 'Страхование каждого авто'],
      count: 35
    },
    { 
      value: 'tral', 
      label: 'Трал', 
      capacity: '60 т, низкорамный', 
      icon: 'Truck',
      description: 'Низкорамные тралы для негабаритных грузов',
      specs: ['Грузоподъёмность: 60 т', 'Низкорамный', 'Сопровождение ГИБДД'],
      count: 35
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Наш парк техники</h2>
          <p className="text-xl text-gray-600">180 единиц специализированного транспорта</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {truckTypes.map((truck) => (
            <div key={truck.value} className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-secondary/30">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Icon name={truck.icon as any} size={28} className="text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-primary">{truck.label}</h3>
                      <Badge className="bg-secondary/20 text-primary hover:bg-secondary/30">
                        {truck.count} единиц
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{truck.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {truck.specs.map((spec, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Icon name="Check" size={16} className="text-secondary mr-2 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Eye" size={16} className="mr-2" />
                        3D-тур
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="FileText" size={16} className="mr-2" />
                        PDF-спецификация
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FleetSection