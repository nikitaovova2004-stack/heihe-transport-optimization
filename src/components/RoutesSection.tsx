import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const RoutesSection = () => {
  const routes = [
    { from: 'Хэйхэ', to: 'Москва', duration: '8 дней', price: '220 000', color: 'bg-red-500' },
    { from: 'Хэйхэ', to: 'Казань', duration: '9 дней', price: '195 000', color: 'bg-blue-500' },
    { from: 'Хэйхэ', to: 'Екатеринбург', duration: '7 дней', price: '185 000', color: 'bg-green-500' },
    { from: 'Хэйхэ', to: 'Новосибирск', duration: '6 дней', price: '165 000', color: 'bg-purple-500' },
    { from: 'Хэйхэ', to: 'СПб', duration: '10 дней', price: '245 000', color: 'bg-orange-500' },
    { from: 'Хэйхэ', to: 'Челябинск', duration: '8 дней', price: '175 000', color: 'bg-teal-500' }
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
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${route.color}`}></div>
                  <span className="text-gray-600 text-sm">{route.from}</span>
                  <Icon name="ArrowRight" size={16} className="text-gray-400" />
                  <span className="font-semibold text-primary">{route.to}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Срок доставки</div>
                  <div className="text-lg font-semibold text-primary">{route.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">от</div>
                  <div className="text-lg font-bold text-secondary">{route.price} ₽</div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Забронировать
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoutesSection