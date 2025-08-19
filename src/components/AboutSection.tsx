import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ТК МЕТЕОР — ведущий оператор международных автоперевозок между 
              Китаем и Россией. Мы специализируемся на FTL доставке из Хэйхэ 
              с собственным парком техники и складской базой.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Членство в СРО логистических компаний</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Партнерство с China Railway Express</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-gray-700">Лицензия на международные перевозки</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="/img/be6739ab-923c-4fd5-a4b5-51cecaeced14.jpg" 
              alt="Парк техники ТК Метеор" 
              className="w-full rounded-2xl shadow-lg"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-gray-600">180+ отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection