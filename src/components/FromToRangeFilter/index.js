import { useEffect, useState } from 'react'
import { Label } from '../Label'
import { onSetRangeFromTo } from '@/store/range'
import { useDispatch, useSelector } from 'react-redux'
import { rangeFromToSelector } from '@/store/range/selectors'
import { isFromLower } from '@/utils/validations/validations'

export const FromToRangeFilter = ({ stat }) => {
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [isLabelShow, setLabelIsShow] = useState(false)
  const rangeValues = useSelector(rangeFromToSelector)
  const dispatch = useDispatch()

  const onSetRangeValue = () => {
    isFromLower(fromValue, toValue)
      ? (dispatch(
          onSetRangeFromTo({
            stat,
            from: Number(fromValue),
            to: Number(toValue),
          }),
        ),
        setLabelIsShow(false))
      : setLabelIsShow(true)
  }

  const handleFromValueChange = (event) => {
    const value = event.target.value
    if (!isNaN(value)) {
      setFromValue(value)
    }
  }

  const handleToValueChange = (event) => {
    const value = event.target.value
    if (!isNaN(value)) {
      setToValue(value)
    }
  }

  useEffect(() => {
    const rangeValue = rangeValues.find((item) => item.stat === stat)
    rangeValue && setFromValue(rangeValue.value.from), setToValue(rangeValue.value.to)
  }, [rangeValues, stat])
  return (
    <div className="range-container">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-1 ">
          <label>From</label>
          <input
            type="text"
            className="textbox"
            value={fromValue}
            onChange={handleFromValueChange}
          />
        </div>
        <div className="flex flex-col justify-center pt-8">
          <div className="line"></div>
        </div>
        <div className="flex flex-col gap-1">
          <label>To</label>
          <input type="text" className="textbox" value={toValue} onChange={handleToValueChange} />
        </div>
      </div>
      {isLabelShow && (
        <Label label={'From value must be less than To value*'} className={'label-warning'} />
      )}
      <div className="flex justify-end">
        <Label
          label={'Apply'}
          className={'btn-apply cursor-pointer bg-btn-primary'}
          clickEvent={onSetRangeValue}
        />
      </div>
    </div>
  )
}
