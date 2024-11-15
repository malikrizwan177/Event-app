import { assets } from "./assets"

export const currentFilter: {text: String, bg_color: String, text_color: String, hover_bg_color: String}[] = [
    {text: 'All', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Music', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Food Feast', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Sports Gala', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
    {text: 'Festivals', bg_color: 'bg-primary', text_color: 'text-white', hover_bg_color: 'bg-cyan-400'},
]

export const filterData: {
   data_type: String, 
   data:{
        img: string,
        price: Number,
        month: String,
        date: String,
        location: String,
        description: String
    }[]}[] = [
  {data_type: 'All',
    data : [
      {
        img: assets.f_img1,
        price: 40.00,
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img2,
        price: 30.00,
        month: 'June',
        date: '18',
        location: "Kim's Convenience Comedy Night",
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img3,
        price: 45.00,
        month: 'May',
        date: '24',
        location: 'International Night Music',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img4,
        price: 50.00,
        month: 'April',
        date: '10',
        location: 'Live-Music Night Party',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Music',
    data : [
      {
        img: assets.f_img2,
        price: 30.00,
        month: 'June',
        date: '18',
        location: "Kim's Convenience Comedy Night",
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img4,
        price: 40.00,
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img1,
        price: 50.00,
        month: 'April',
        date: '10',
        location: 'Live-Music Night Party',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img3,
        price: 45.00,
        month: 'May',
        date: '24',
        location: 'International Night Music',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Food Feast',
    data : [
      {
        img: assets.f_img4,
        price: 40.00,
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img2,
        price: 45.00,
        month: 'May',
        date: '24',
        location: 'International Night Music',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img3,
        price: 30.00,
        month: 'June',
        date: '18',
        location: "Kim's Convenience Comedy Night",
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img1,
        price: 50.00,
        month: 'April',
        date: '10',
        location: 'Live-Music Night Party',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Sports Gala',
    data : [
      {
        img: assets.f_img4,
        price: 30.00,
        month: 'June',
        date: '18',
        location: "Kim's Convenience Comedy Night",
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img3,
        price: 45.00,
        month: 'May',
        date: '24',
        location: 'International Night Music',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img2,
        price: 50.00,
        month: 'April',
        date: '10',
        location: 'Live-Music Night Party',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img1,
        price: 40.00,
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Festivals',
    data : [
      {
        img: assets.f_img3,
        price: 40.00,
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img4,
        price: 50.00,
        month: 'April',
        date: '10',
        location: 'Live-Music Night Party',
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img1,
        price: 30.00,
        month: 'June',
        date: '18',
        location: "Kim's Convenience Comedy Night",
        description: 'Indonesia-Korea Conference'
      },
      {
        img: assets.f_img1,
        price: 45.00,
        month: 'May',
        date: '24',
        location: 'International Night Music',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
]