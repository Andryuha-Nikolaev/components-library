import metaConstants from "../meta/meta"
type Subpage = {
  name: string
  path: string
  meta?: {
    title: string
  }
}

type Page = {
  name: string
  path: string
  meta?: {
    title: string
  }
  subpages?: Record<string, Subpage>
}

type PagesConstants = {
  pages: Record<string, Page>
}

export type PageWithSubpages = {
  name: string
  path: string
  subpages: Subpage[]
}

type PageWithoutSubpages = {
  name: string
  path: string
}

const pagesConstants: PagesConstants = {
  pages: {
    main: {
      name: "Главная",
      path: "/",
      meta: { title: metaConstants.title },
    },
    insurance: {
      name: "Страхование",
      path: "/insurance",
      meta: {
        title: `Страхование | ${metaConstants.title}`,
      },
    },
    antiDoping: {
      name: "Антидопинг",
      path: "/anti-doping",
      meta: {
        title: `Антидопинг | ${metaConstants.title}`,
      },
    },

    bulletin: {
      name: "Бюллетень Российского дзюдо",
      path: "/bulletin",
      meta: {
        title: `Бюллетень Российского дзюдо | ${metaConstants.title}`,
      },
    },

    federation: {
      name: "Федерация",
      path: "/federation",
      meta: {
        title: metaConstants.title,
      },
      subpages: {
        history: {
          name: "Наша история",
          path: "/federation/history",
          meta: {
            title: `Наша история | ${metaConstants.title}`,
          },
        },
        structure: {
          name: "Структура",
          path: "/federation/structure",
          meta: {
            title: `Структрура | ${metaConstants.title}`,
          },
        },
        team: {
          name: "Команда сегодня",
          path: "/federation/team",
          meta: {
            title: `Команда сегодня | ${metaConstants.title}`,
          },
        },
        map: {
          name: "Карта дзюдо России",
          path: "/federation/map",
          meta: {
            title: `Карта дзюдо России | ${metaConstants.title}`,
          },
        },
        documents: {
          name: "Документы",
          path: "/federation/documents",
          meta: {
            title: `Документы | ${metaConstants.title}`,
          },
        },
        contacts: {
          name: "Контакты",
          path: "/federation/contacts",
          meta: {
            title: `Контакты | ${metaConstants.title}`,
          },
        },
      },
    },

    projects: {
      name: "Проекты ФДР",
      path: "/projects",
      meta: {
        title: metaConstants.title,
      },
      subpages: {
        professional: {
          name: "Профессиональное дзюдо",
          path: "/projects/professional",
          meta: {
            title: `Профессиональное дзюдо | ${metaConstants.title}`,
          },
        },
        preschool: {
          name: "Дошкольное дзюдо",
          path: "/projects/preschool",
          meta: {
            title: `Дошкольное дзюдо | ${metaConstants.title}`,
          },
        },
        family: {
          name: "Семья чемпионов",
          path: "/projects/family",
          meta: {
            title: `Семья чемпионов | ${metaConstants.title}`,
          },
        },
        youthLeagues: {
          name: "Детско-юношеские лиги российского дзюдо",
          path: "/projects/youth-leagues",
          meta: {
            title: `Семья чемпионов | ${metaConstants.title}`,
          },
        },
        myFirstJudoBelt: {
          name: "Мой первый пояс дзюдо",
          path: "/projects/my-first-judo-belt",
          meta: {
            title: `Мой первый пояс дзюдо | ${metaConstants.title}`,
          },
        },
        planetOfJudo: {
          name: "Планета дзюдо",
          path: "/projects/planet-of-judo",
          meta: {
            title: `Планета дзюдо | ${metaConstants.title}`,
          },
        },
        veteranJudo: {
          name: "Ветеранское дзюдо",
          path: "/projects/veteran-judo",
          meta: {
            title: `Ветеранское дзюдо | ${metaConstants.title}`,
          },
        },
        judoAcademy: {
          name: "Академия ФДР",
          path: "/projects/judo-academy",
          meta: {
            title: `Академия ФДР | ${metaConstants.title}`,
          },
        },
        fiftyYearsOfJudo: {
          name: "50 лет ФДР — 50 залов дзюдо",
          path: "/projects/50-years-of-judo",
          meta: {
            title: `50 лет ФДР — 50 залов дзюдо | ${metaConstants.title}`,
          },
        },
        patriotism: {
          name: "Патриотика",
          path: "/projects/patriotism",
          meta: {
            title: `Патриотика | ${metaConstants.title}`,
          },
        },
      },
    },
    about: {
      name: "О дзюдо",
      path: "/about",
      meta: {
        title: metaConstants.title,
      },
      subpages: {
        historyOfJudo: {
          name: "История дзюдо",
          path: "/about/history-of-judo",
          meta: {
            title: `История дзюдо | ${metaConstants.title}`,
          },
        },
        hallOfFame: {
          name: "Зал славы",
          path: "/about/hall-of-fame",
          meta: {
            title: `Зал славы | ${metaConstants.title}`,
          },
        },
        kataVideos: {
          name: "Видео Ката",
          path: "/about/kata-videos",
          meta: {
            title: `Видео Ката | ${metaConstants.title}`,
          },
        },
        ruleChangesVideos: {
          name: "Видео изменений в правилах",
          path: "/about/rule-changes-videos",
          meta: {
            title: `Видео изменений в правилах | ${metaConstants.title}`,
          },
        },
      },
    },
    news: {
      name: "Новости",
      path: "/news",
      meta: {
        title: `Новости | ${metaConstants.title}`,
      },
      subpages: {
        russianEvents: {
          name: "Российские мероприятия",
          path: "/news?category=russian-events",
          meta: {
            title: `Российские мероприятия | ${metaConstants.title}`,
          },
        },
        internationalEvents: {
          name: "Международные мероприятия",
          path: "/news?category=international-events",
          meta: {
            title: `Международные мероприятия | ${metaConstants.title}`,
          },
        },
        pressAboutJudo: {
          name: "Пресса о дзюдо",
          path: "/news?category=press-about-judo",
          meta: {
            title: `Пресса о дзюдо | ${metaConstants.title}`,
          },
        },
        judoInRegions: {
          name: "Дзюдо в регионах",
          path: "/news?category=judo-in-regions",
          meta: {
            title: `Дзюдо в регионах | ${metaConstants.title}`,
          },
        },
      },
    },
    calendar: {
      name: "Календарь",
      path: "/calendar",
      meta: {
        title: `Календарь | ${metaConstants.title}`,
      },
      subpages: {
        russianEvents: {
          name: "Российские мероприятия",
          path: "/calendar?category=russian-events",
          meta: {
            title: `Российские мероприятия | ${metaConstants.title}`,
          },
        },
        internationalEvents: {
          name: "Международные мероприятия",
          path: "/calendar?category=international-events",
          meta: {
            title: `Международные мероприятия | ${metaConstants.title}`,
          },
        },
        seminars: {
          name: "Семинары",
          path: "/calendar?category=seminars",
          meta: {
            title: `Семинары | ${metaConstants.title}`,
          },
        },
        familyJudoPrograms: {
          name: "Программы детского и семейного дзюдо",
          path: "/calendar?category=family-judo-programs",
          meta: {
            title: `Программы детского и семейного дзюдо | ${metaConstants.title}`,
          },
        },
      },
    },
    broadcasts: {
      name: "Трансляции",
      path: "/broadcasts",
      meta: {
        title: `Трансляции | ${metaConstants.title}`,
      },
      subpages: {
        current: {
          name: "Актуальное",
          path: "/broadcasts/current",
          meta: {
            title: `Трансляции | Актуальное | ${metaConstants.title}`,
          },
        },
        archive: {
          name: "Архив",
          path: "/broadcasts/archive",
          meta: {
            title: `Трансляции | Архив | ${metaConstants.title}`,
          },
        },
        podcasts: {
          name: "Подкасты",
          path: "/broadcasts/podcasts",
          meta: {
            title: `Трансляции | Подкасты | ${metaConstants.title}`,
          },
        },
      },
    },
    galery: {
      name: "Галерея",
      path: "/gallery",
      meta: {
        title: `Галерея | ${metaConstants.title}`,
      },
      subpages: {
        photo: {
          name: "Фото",
          path: "/gallery/photo",
          meta: {
            title: `Галерея | Фото | ${metaConstants.title}`,
          },
        },
        video: {
          name: "Видео",
          path: "/gallery/video",
          meta: {
            title: `Галерея | Видео | ${metaConstants.title}`,
          },
        },
      },
    },
  },
}

const pagesWithSubpages: PageWithSubpages[] = []
const pagesWithoutSubpages: PageWithoutSubpages[] = []

Object.keys(pagesConstants.pages).forEach((key) => {
  const page = pagesConstants.pages[key]

  if (key !== "main") {
    const pageInfo = {
      name: page.name,
      path: page.path,
    }

    if (page.subpages !== undefined && Object.keys(page.subpages).length > 0) {
      const subpagesArr: Subpage[] = Object.keys(page.subpages).map(
        (subKey) => {
          const subpage = page.subpages![subKey]
          return {
            name: subpage.name,
            path: subpage.path,
          }
        }
      )

      pagesWithSubpages.push({
        ...pageInfo,
        subpages: subpagesArr,
      })
    } else {
      pagesWithoutSubpages.push(pageInfo)
    }
  }
})

export { pagesConstants, pagesWithSubpages, pagesWithoutSubpages }
