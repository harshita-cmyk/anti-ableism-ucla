export type Partner = {
  id: string
  name: string
  /** Use an approved local logo asset; preserve its original colors. */
  logo?: string
  /** Add only a verified partner website URL. */
  websiteUrl?: string
}

export const partners: Partner[] = [
  { id: 'lighthouse', logo: '/partners/lighthouse.svg', websiteUrl: 'https://lighthouse-sf.org/', name: 'LightHouse for the Blind and Visually Impaired' },
  { id: 'select-physical-therapy', logo: '/partners/select-physical-therapy.png', websiteUrl: 'https://www.selectphysicaltherapy.com/', name: 'Select Physical Therapy' },
  { id: 'disability-rights-california', logo: '/partners/disability-rights-california.svg', websiteUrl: 'https://www.disabilityrightsca.org/', name: 'Disability Rights California' },
  { id: 'foundation-fighting-blindness', logo: '/partners/foundation-fighting-blindness.svg', websiteUrl: 'https://www.fightingblindness.org/', name: 'Foundation Fighting Blindness' },
  { id: 'starvista', logo: '/partners/starvista.png', websiteUrl: 'https://star-vista.org/', name: 'StarVista' },
  { id: 'vista-center', logo: '/partners/vista-center.svg', websiteUrl: 'https://vistacenter.org/', name: 'Vista Center for the Blind and Visually Impaired' },
  { id: 'zhus-neuro-acupuncture', logo: '/partners/zhus-neuro-acupuncture.png', websiteUrl: 'https://scalpacupuncture.org/', name: "Zhu's Neuro Acupuncture and Rehabilitation Center" },
  { id: 'special-olympics-ucla', logo: '/special_olympics.png', websiteUrl: 'https://community.ucla.edu/studentorg/147', name: 'Special Olympics at UCLA' },
]
