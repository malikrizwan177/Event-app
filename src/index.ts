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
        id: String,
        img: string,
        price: String,
        month: String,
        date: String,
        location: String,
        description: String
    }[]}[] = [
  {data_type: 'All',
    data : [
      {
        id: '1111',
        img: assets.f_img1,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1112',
        img: assets.f_img2,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1113',
        img: assets.f_img3,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1114',
        img: assets.f_img4,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Music',
    data : [
      {
        id: '1115',
        img: assets.f_img2,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1116',
        img: assets.f_img4,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1117',
        img: assets.f_img1,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1118',
        img: assets.f_img3,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Food Feast',
    data : [
      {
        id: '1119',
        img: assets.f_img4,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1120',
        img: assets.f_img2,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1121',
        img: assets.f_img3,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1122',
        img: assets.f_img1,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
  {data_type: 'Sports Gala',
    data : [
      {
        id: '1123',
        img: assets.f_img4,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1124',
        img: assets.f_img3,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1125',
        img: assets.f_img2,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1126',
        img: assets.f_img1,
        price: '40.00',
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
        id: '1127',
        img: assets.f_img3,
        price: '40.00',
        month: 'July',
        date: '20',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1128',
        img: assets.f_img4,
        price: '50.00',
        month: 'April',
        date: '10',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1129',
        img: assets.f_img1,
        price: '30.00',
        month: 'June',
        date: '18',
        location: "Gala Convention Center",
        description: 'Indonesia-Korea Conference'
      },
      {
        id: '1130',
        img: assets.f_img1,
        price: '45.00',
        month: 'May',
        date: '24',
        location: 'Gala Convention Center',
        description: 'Indonesia-Korea Conference'
      },
    ]
  },
]