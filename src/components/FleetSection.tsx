import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const FleetSection = () => {
  const truckTypes = [
    { value: 'tent', label: 'Тент', capacity: '82-120 м³, 20-22 т', icon: 'Package' },
    { value: 'ref', label: 'Реф', capacity: '86 м³, -20°C ... +25°C', icon: 'Snowflake' },
    { value: 'carrier', label: 'Автовоз', capacity: '8-10 легковых', icon: 'Car' },
    { value: 'tral', label: 'Трал', capacity: '60 т, низкорамный', icon: 'Truck' }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Наш парк техники</h2>
          <p className="text-xl text-gray-600">180 единиц специализированного транспорта</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {truckTypes.map((truck, index) => (
            <div key={truck.value} className="group">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:bg-white border-2 border-transparent group-hover:border-secondary/20">
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Icon name={truck.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{truck.label}</h3>
                <p className="text-gray-600 mb-4">{truck.capacity}</p>
                <Badge className="bg-secondary/20 text-primary hover:bg-secondary/30">
                  {(index + 1) * 15}+ единиц
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FleetSection