// 'use client'

// import { Flex } from '@/components/layout/Flex'

// import s from './company.module.scss'
// import Link from 'next/link'
// import { forwardRef, useRef } from 'react'

// interface ICompanyProps {
//   src: string
//   alt: string
//   href: string
// }
// function Company(props: ICompanyProps) {
//   const { src, alt, href } = props

//   return <>
//     <Link href={href}>
//       <Flex className={s.company} align='center' justify='center' height='130px'>
//         <img src={src} alt={alt} />
//       </Flex>
//     </Link>
//   </>
// }

// interface IMarqueeProps {
//   startPostion: number
// }
// const Marquee = forwardRef<Flicking, IMarqueeProps>((props, ref) => {
//   const { startPostion } = props

//   return <>
//     <Flicking
//       ref={ref}
//     >
//       <Company src='https://minio-m0wso0o.algorix.cloud/company-logo/google.com' alt='Google' href='' />
//       <Company src='https://minio-m0wso0o.algorix.cloud/company-logo/google.com' alt='Google' href='' />
//       <Company src='https://minio-m0wso0o.algorix.cloud/company-logo/google.com' alt='Google' href='' />
//       <Company src='https://minio-m0wso0o.algorix.cloud/company-logo/google.com' alt='Google' href='' />
//       <Company src='https://minio-m0wso0o.algorix.cloud/company-logo/google.com' alt='Google' href='' />
//     </Flicking>
//   </>
// })

// export function CompanyMarquee() {
//   const container1Ref = useRef<Flicking>(null)
//   const container2Ref = useRef<Flicking>(null)

//   return <>
//     <Flex className={s.container} direction='column' gap={40}>
//       <Marquee ref={container1Ref} startPostion={0} />
//       <Marquee ref={container2Ref} startPostion={100} />
//     </Flex>
//   </>
// }
