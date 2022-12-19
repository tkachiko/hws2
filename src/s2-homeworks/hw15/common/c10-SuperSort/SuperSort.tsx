import React from 'react'
import up from './../../../../assets/icons/up.png'
import down from './../../../../assets/icons/down.png'
import updown from './../../../../assets/icons/updown.png'

// добавить в проект иконки и импортировать
const downIcon = up
const upIcon = down
const noneIcon = updown

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

  switch (sort) {
    case '':
      return down
    case down:
      return up
    case up:
      return ''
  }
  return down
   // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  },
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
            <img
              id={id + '-icon-' + sort}
              src={icon}
              alt={'up or down'}
            />
        </span>
  )
}

export default SuperSort
