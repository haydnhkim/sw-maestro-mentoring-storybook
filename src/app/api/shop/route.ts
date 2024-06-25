export async function GET(request: Request) {
  return new Response(JSON.stringify([{
    imageUrl: '/images/applications-image-01.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 4.2,
    price: 89
  }, {
    imageUrl: '/images/applications-image-02.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 3.9,
    price: 49
  }, {
    imageUrl: '/images/applications-image-03.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 4.6,
    price: 129
  }, {
    imageUrl: '/images/applications-image-04.jpg',
    title: 'HTML, CSS, JavaScript - Build 6 Creative Projects',
    rate: 4.7,
    price: 129
  }]));
}
