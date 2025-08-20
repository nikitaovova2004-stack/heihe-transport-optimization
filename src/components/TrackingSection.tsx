import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'
import { Badge } from '@/components/ui/badge'

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = () => {
    if (!trackingNumber.trim()) return
    
    setIsLoading(true)
    
    // Симуляция API запроса
    setTimeout(() => {
      setTrackingResult({
        number: trackingNumber,
        status: 'В пути',
        currentLocation: 'Хабаровск',
        destination: 'Москва',
        progress: 65,
        estimatedDelivery: '25 августа 2025',
        route: [
          { city: 'Хэйхэ', status: 'completed', date: '15.08.2025' },
          { city: 'Благовещенск', status: 'completed', date: '16.08.2025' },
          { city: 'Хабаровск', status: 'current', date: '20.08.2025' },
          { city: 'Новосибирск', status: 'pending', date: '22.08.2025' },
          { city: 'Москва', status: 'pending', date: '25.08.2025' }
        ]
      })
      setIsLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'current': return 'bg-primary'
      case 'pending': return 'bg-gray-300'
      default: return 'bg-gray-300'
    }
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Отследить груз
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Введите номер накладной или контейнера для получения актуальной информации о местоположении вашего груза
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Форма поиска */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Введите номер накладной (например: HH240820001)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-primary"
                />
              </div>
              <Button
                onClick={handleTrack}
                disabled={isLoading || !trackingNumber.trim()}
                className="h-14 px-8 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" size={24} className="mr-2 animate-spin" />
                    Поиск...
                  </>
                ) : (
                  <>
                    <Icon name="Search" size={24} className="mr-2" />
                    Отследить
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Результаты отслеживания */}
          {trackingResult && (
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Накладная #{trackingResult.number}
                  </h3>
                  <Badge className="bg-primary text-white">
                    {trackingResult.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Ожидаемая доставка</div>
                  <div className="text-xl font-semibold text-primary">
                    {trackingResult.estimatedDelivery}
                  </div>
                </div>
              </div>

              {/* Прогресс-бар */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Текущее местоположение: {trackingResult.currentLocation}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {trackingResult.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${trackingResult.progress}%` }}
                  />
                </div>
              </div>

              {/* Маршрут */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">
                  Маршрут следования
                </h4>
                <div className="space-y-4">
                  {trackingResult.route.map((point: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${getStatusColor(point.status)}`} />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{point.city}</div>
                        <div className="text-sm text-gray-500">{point.date}</div>
                      </div>
                      {point.status === 'completed' && (
                        <Icon name="Check" size={20} className="text-green-500" />
                      )}
                      {point.status === 'current' && (
                        <Icon name="MapPin" size={20} className="text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">Служба поддержки</div>
                      <div className="font-medium">+7 (499) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageSquare" size={20} className="text-primary" />
                    <div>
                      <div className="text-sm text-gray-500">Онлайн чат</div>
                      <div className="font-medium text-primary cursor-pointer hover:underline">
                        Написать менеджеру
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Примеры номеров */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-2">Для демонстрации попробуйте:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['HH240820001', 'CN240820002', 'RF240820003'].map((example) => (
                <button
                  key={example}
                  onClick={() => setTrackingNumber(example)}
                  className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackingSection