import Icon from '@/components/ui/icon'

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Услуги под ключ</h2>
          <p className="text-xl text-gray-600">Полный цикл логистических услуг</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Icon name="Truck" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Доставка FTL/LTL</h3>
            <p className="text-gray-600">Полные и сборные грузы</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Icon name="FileText" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Таможенное оформление</h3>
            <p className="text-gray-600">HS-коды, декларации</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Icon name="Package" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Консолидация</h3>
            <p className="text-gray-600">Склад 5000 м² в Хэйхэ</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
              <Icon name="Shield" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Страхование CMR</h3>
            <p className="text-gray-600">До 3 млн ¥</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection