import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, Fragment } from 'react'
import classNames from 'classnames'


export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | undefined

import SizeContext, { SizeType } from '../config/SizeContext';

export interface FcButtonType {
    className?: string,
    // 设置 Button 类型
    type?: ButtonType,
    href?: string,
    size?: SizeType
    ghost?:  boolean,
    block?: boolean,
    disabled?: Boolean,
    children?: React.ReactNode
}

type BaseButtonProps = FcButtonType & ButtonHTMLAttributes<HTMLElement>
type BaseLinkProps = FcButtonType & AnchorHTMLAttributes<HTMLElement>

export type ButtonTypes = Partial<BaseButtonProps & BaseLinkProps>

const Button: FC<ButtonTypes> = (props) => {
    return (
        <SizeContext.Consumer>
            {
              size => {
                const {
                    className,
                    type,
                    ghost,
                    block,
                    children,
                    disabled,
                    size: customizeSize,
                    ...restProps
                } = props

                let SizeType = ''
                switch ( customizeSize || size ) {
                    case 'large':
                        SizeType = 'lg';
                        break;
                    case 'small':
                        SizeType = 'sm';
                        break
                    default:
                        break
                }

                const classes = classNames(className, {
                    [`mor-${type}`]: type,
                    [`mor-${SizeType}`]: SizeType,
                    ['mor-ghost']: ghost,
                    ['mor-block']: block,
                    ['mor-disabled']: disabled
                })

                
                if (type === 'link' && props.href) {
                    <a {...restProps} className={classes}>
                        {children}
                    </a>
                }

                return (
                    <button {...restProps} className={classes}>
                        { children }
                    </button>
                )
              }
            }
        </SizeContext.Consumer>
    )
}

export default Button
