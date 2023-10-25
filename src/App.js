import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Header,
  CardGrid,
} from '@vkontakte/vkui'
import CourseCard from './CourseCard'
import { useEffect, useState } from 'react'
import bridge from '@vkontakte/vk-bridge'

const courses = [
  {
    title: 'Курс «Основы JavaScript» и 50 заданий',
    img: 'https://result.school/img/icons/products/icon-javascript.svg',
    url: 'https://result.school/products/javascript',
  },
  {
    title: 'HTML & CSS — первый шаг в IT',
    img: 'https://result.school/img/icons/products/icon-html-css.svg',
    url: 'https://result.school/products/html-css',
  },
  {
    title: 'Марафон JavaScript «5 дней — 5 проектов»',
    img: 'https://result.school/img/icons/products/icon-marathon-five-x-five.svg',
    url: 'https://result.school/products/marathon-js',
  },
]

export default function App() {
  const [vkUser, setVkUser] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      const user = await bridge.send('VKWebAppGetUserInfo')
      setVkUser(user)
    }
    fetchUser()
  }, [])

  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>Result University Products</PanelHeader>
          <Group
            mode="card"
            header={<Header mode="secondary">Бесплатные интенсивы</Header>}
          >
            <CardGrid size="s">
              {courses.map((c) => (
                <CourseCard
                  key={c.url}
                  title={c.title}
                  img={c.img}
                  url={c.url}
                />
              ))}
            </CardGrid>
          </Group>

          <Group
            mode="card"
            header={
              <Header mode="secondary">Информация про пользователя</Header>
            }
          >
            {vkUser && vkUser?.first_name} {vkUser && vkUser?.last_name}
          </Group>
        </Panel>
      </View>
    </AppRoot>
  )
}
