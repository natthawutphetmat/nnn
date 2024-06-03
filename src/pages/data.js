export async function getData() {
  const res = [
    {
      "id": 1,
      "img": "1.jpg"
    },
    {
      "id": 2,
      "img": "2.jpg"
    },
    {
      "id": 3,
      "img": "3.jpg"
    },
    {
      "id": 4,
      "img": "4.jpg"
    },
    {
      "id": 5,
      "img": "5.jpg"
    },
    {
      "id": 6,
      "img": "6.jpg"
    }
  ];

  if (!res) {
    throw new Error('Failed to fetch data');
  }
  
  return res; // เนื่องจาก res เป็นข้อมูลที่เรากำหนดเองแล้ว
}
