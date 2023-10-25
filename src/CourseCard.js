import { Card, Div, Title } from '@vkontakte/vkui'

export default function CourseCard({ title, img, url }) {
  return (
    <Card mode="shadow" onClick={() => window.open(url, '_blank').focus()}>
      <Div
        style={{
          display: 'flex',
          height: 220,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <img src={img} alt={title} />
        <Title level={2}>{title}</Title>
      </Div>
    </Card>
  )
}
