import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const WarehouseServicesSection = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      title: 'Приёмка и размещение груза',
      description: 'Профессиональная приёмка, проверка и размещение товаров на складе с ведением точного учёта',
      features: [
        'Тщательная проверка комплектности',
        'Фото и видео фиксация состояния',
        'Штрих-кодирование товаров',
        'Размещение по оптимальным зонам'
      ],
      price: 'От 50 ₽/м³',
      icon: 'Package',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Хранение товаров',
      description: 'Безопасное хранение в современных складских помещениях с контролем температуры и влажности',
      features: [
        'Температурные зоны от -25°C до +25°C',
        'Система пожаротушения и сигнализации',
        '24/7 видеонаблюдение и охрана',
        'Страхование на полную стоимость груза'
      ],
      price: 'От 15 ₽/м³/сутки',
      icon: 'Warehouse',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Комплектация и отгрузка',
      description: 'Сборка заказов по спецификациям клиента и организация отправки получателям',
      features: [
        'Комплектация по заявкам клиента',
        'Упаковка в брендированную тару',
        'Подготовка сопроводительных документов',
        'Загрузка транспорта с оптимизацией'
      ],
      price: 'От 80 ₽/место',
      icon: 'PackageCheck',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Таможенное оформление',
      description: 'Полное сопровождение таможенных процедур для импортных и экспортных грузов',
      features: [
        'Подготовка таможенных деклараций',
        'Взаимодействие с таможенными органами',
        'Получение разрешительных документов',
        'Консультации по ВЭД'
      ],
      price: 'От 5 000 ₽/декларация',
      icon: 'FileText',
      color: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Дополнительные услуги',
      description: 'Широкий спектр складских и логистических услуг для полного обслуживания клиентов',
      features: [
        'Перепаковка и переупаковка',
        'Маркировка и этикетирование',
        'Инвентаризация остатков',
        'Подготовка отчётов и аналитики'
      ],
      price: 'По договорённости',
      icon: 'Settings',
      color: 'bg-red-500'
    }
  ]

  const advantages = [
    {
      icon: 'MapPin',
      title: 'Хэйхэ, КНР',
      description: 'Склад 5 000 м² в приграничном городе'
    },
    {
      icon: 'Thermometer',
      title: 'Мультитемпературный',
      description: 'Зоны от -25°C до +25°C'
    },
    {
      icon: 'Shield',
      title: 'Застрахован',
      description: 'Полное страхование грузов'
    },
    {
      icon: 'Clock',
      title: '24/7 доступ',
      description: 'Круглосуточная работа склада'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
            Складские услуги
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-6">
            Современный складской комплекс в Хэйхэ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            5 000 м² современного складского пространства с полным циклом обслуживания грузов. 
            Профессиональная команда и новейшее оборудование для вашего бизнеса.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/img/04f908dc-47ac-48ba-88a0-fda2e7036a56.jpg"
              alt="Современный склад"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">5 000 м² складских площадей</h3>
                <div className="flex justify-center space-x-8">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Icon name={advantage.icon as any} size={24} />
                      </div>
                      <div className="font-semibold">{advantage.title}</div>
                      <div className="text-sm opacity-90">{advantage.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Полный спектр складских услуг
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                    activeService === index
                      ? 'border-primary bg-primary/5 shadow-lg scale-[1.02]'
                      : 'border-gray-200 bg-white hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center`}>
                      <Icon name={service.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-primary">{service.title}</h4>
                      <p className="text-gray-600 mt-1">{service.description}</p>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {service.price}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Service Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${services[activeService].color} rounded-2xl flex items-center justify-center`}>
                  <Icon name={services[activeService].icon as any} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{services[activeService].title}</h3>
                  <Badge className="bg-secondary text-primary mt-2">
                    {services[activeService].price}
                  </Badge>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-primary mb-4">Что входит в услугу:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl font-semibold">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Готовы доверить нам ваш груз?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию и расчёт стоимости складских услуг
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              variant="secondary" 
              className="h-12 px-8 font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button 
              variant="outline" 
              className="h-12 px-8 font-semibold rounded-xl border-white text-white hover:bg-white hover:text-primary shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (499) 123-45-67
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WarehouseServicesSection