import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'

const RequestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    cargoType: '',
    weight: '',
    volume: '',
    departure: '',
    destination: '',
    transportType: 'tent',
    urgency: 'standard',
    additionalServices: [] as string[],
    comment: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const transportTypes = [
    { value: 'tent', label: 'Тент', description: '82-120 м³, 20-22 т', icon: 'Package' },
    { value: 'ref', label: 'Рефрижератор', description: '86 м³, -20°C...+25°C', icon: 'Snowflake' },
    { value: 'carrier', label: 'Автовоз', description: '8-10 легковых авто', icon: 'Car' },
    { value: 'tral', label: 'Трал', description: '60 т, негабарит', icon: 'Truck' }
  ]

  const urgencyOptions = [
    { value: 'standard', label: 'Стандартная', description: '7-12 дней', price: '' },
    { value: 'express', label: 'Экспресс', description: '5-7 дней', price: '+20%' },
    { value: 'urgent', label: 'Срочная', description: '3-5 дней', price: '+35%' }
  ]

  const additionalServices = [
    { value: 'insurance', label: 'Страхование', description: '2% от стоимости груза' },
    { value: 'packaging', label: 'Упаковка', description: 'Профессиональная упаковка' },
    { value: 'warehouse', label: 'Складирование', description: 'Хранение до 30 дней' },
    { value: 'customs', label: 'Таможенное оформление', description: 'Полное сопровождение' }
  ]

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Симуляция отправки
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Сброс через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '', phone: '', email: '', company: '', cargoType: '',
          weight: '', volume: '', departure: '', destination: '',
          transportType: 'tent', urgency: 'standard', additionalServices: [], comment: ''
        })
      }, 3000)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Заявка принята!</h2>
              <p className="text-gray-600 text-lg mb-6">
                Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей и расчёта стоимости
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-secondary text-primary px-4 py-2">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Ответ за 15 мин
                </Badge>
                <Badge className="bg-primary text-white px-4 py-2">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Точный расчёт
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Оставить заявку на перевозку
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Заполните форму и получите точный расчёт стоимости и сроков доставки в течение 15 минут
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {/* Контактная информация */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="User" size={24} className="mr-2" />
                Контактная информация
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Компания"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Информация о грузе */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Package" size={24} className="mr-2" />
                Информация о грузе
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Input
                  placeholder="Тип груза *"
                  value={formData.cargoType}
                  onChange={(e) => setFormData(prev => ({ ...prev, cargoType: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Вес (тонн) *"
                  value={formData.weight}
                  onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Объём (м³) *"
                  value={formData.volume}
                  onChange={(e) => setFormData(prev => ({ ...prev, volume: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Маршрут */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="MapPin" size={24} className="mr-2" />
                Маршрут
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Откуда (город отправления) *"
                  value={formData.departure}
                  onChange={(e) => setFormData(prev => ({ ...prev, departure: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Куда (город назначения) *"
                  value={formData.destination}
                  onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                  required
                  className="h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Тип транспорта */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Truck" size={24} className="mr-2" />
                Тип транспорта
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {transportTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, transportType: type.value }))}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                      formData.transportType === type.value
                        ? 'border-primary bg-primary/5 scale-105 shadow-md'
                        : 'border-gray-200 hover:border-primary/50 hover:shadow-sm'
                    }`}
                  >
                    <Icon name={type.icon as any} size={24} className="text-primary mb-2" />
                    <div className="font-semibold text-primary">{type.label}</div>
                    <div className="text-sm text-gray-600">{type.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Срочность */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Clock" size={24} className="mr-2" />
                Срочность доставки
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {urgencyOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, urgency: option.value }))}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                      formData.urgency === option.value
                        ? 'border-primary bg-primary/5 scale-105 shadow-md'
                        : 'border-gray-200 hover:border-primary/50 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-primary">{option.label}</div>
                      {option.price && <Badge variant="outline">{option.price}</Badge>}
                    </div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Дополнительные услуги */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Plus" size={24} className="mr-2" />
                Дополнительные услуги
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalServices.map((service) => (
                  <button
                    key={service.value}
                    type="button"
                    onClick={() => handleServiceToggle(service.value)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                      formData.additionalServices.includes(service.value)
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-primary">{service.label}</div>
                      <div className={`w-5 h-5 rounded border-2 ${
                        formData.additionalServices.includes(service.value)
                          ? 'bg-primary border-primary'
                          : 'border-gray-300'
                      }`}>
                        {formData.additionalServices.includes(service.value) && (
                          <Icon name="Check" size={12} className="text-white m-0.5" />
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{service.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Комментарий */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="MessageSquare" size={24} className="mr-2" />
                Комментарий
              </h3>
              <Textarea
                placeholder="Дополнительная информация, особые требования..."
                value={formData.comment}
                onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                className="min-h-[100px] rounded-xl"
              />
            </div>

            {/* Кнопка отправки */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-12 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={24} className="mr-2 animate-spin" />
                    Отправляем заявку...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={24} className="mr-2" />
                    Получить расчёт стоимости
                  </>
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                * Обязательные поля. Ответ в течение 15 минут в рабочее время
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RequestSection