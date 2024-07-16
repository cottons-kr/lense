import { BusinessType, BusinessItem } from '@prisma/client'

export const businessTypeName: Record<BusinessType, string> = {
  [BusinessType.MANUFACTURING]: '제조업',
  [BusinessType.WHOLESALE]: '도매업',
  [BusinessType.RETAIL]: '소매업',
  [BusinessType.SERVICES]: '서비스업',
  [BusinessType.CONSTRUCTION]: '건설업',
  [BusinessType.FINANCE]: '금융업',
  [BusinessType.INSURANCE]: '보험업',
  [BusinessType.HOSPITALITY]: '숙박업',
  [BusinessType.FOOD_AND_BEVERAGE]: '음식 및 음료업',
  [BusinessType.TRANSPORTATION]: '운송업',
  [BusinessType.REAL_ESTATE]: '부동산업',
}

export const businessItemName: Record<BusinessItem, string> = {
  [BusinessItem.ELECTRONICS]: '전자제품',
  [BusinessItem.FOOD_PRODUCTS]: '식품 제품',
  [BusinessItem.APPAREL]: '의류',
  [BusinessItem.COSMETICS]: '화장품',
  [BusinessItem.SOFTWARE]: '소프트웨어',
  [BusinessItem.AUTOMOBILES]: '자동차',
  [BusinessItem.MEDICAL_DEVICES]: '의료기기',
}