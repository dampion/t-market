// react
import React, { useState } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import { toast } from 'react-toastify';
import axios from 'axios';
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
// import CurrencyFormat from '~/components/shared/CurrencyFormat';
import InputNumber from '~/components/shared/InputNumber';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';
import { Cross12Svg } from '~/svg';
import { ICartItem } from '~/store/cart/cartTypes';
import { useCart, useCartRemoveItem, useCartUpdateQuantities } from '~/store/cart/cartHooks';
import { load } from '~/store/store';

interface Quantity {
    itemId: number;
    value: string | number;
}

function Page() {
    const intl = useIntl();
    const cart = useCart();
    const cartRemoveItem = useCartRemoveItem();
    const cartUpdateQuantities = useCartUpdateQuantities();
    const [quantities, setQuantities] = useState<Quantity[]>([]);
    const { items } = cart;

    const updateQuantities = () => (
        cartUpdateQuantities(quantities.map((x) => ({
            ...x,
            value: typeof x.value === 'string' ? parseFloat(x.value) : x.value,
        })))
    );

    const cartNeedUpdate = () => (
        quantities.filter((x) => {
            const item = cart.items.find((item) => item.id === x.itemId);

            return item && item.quantity !== x.value && x.value !== '';
        }).length > 0
    );

    const getItemQuantity = (item: ICartItem) => {
        const quantity = quantities.find((x) => x.itemId === item.id);

        return quantity ? quantity.value : item.quantity;
    };

    const handleChangeQuantity = (item: ICartItem, quantity: string | number) => {
        setQuantities((prevState) => {
            const index = prevState.findIndex((x) => x.itemId === item.id);

            if (index === -1) {
                return [
                    ...prevState,
                    {
                        itemId: item.id,
                        value: quantity,
                    },
                ];
            }

            return [
                ...prevState.slice(0, index),
                {
                    ...prevState[index],
                    value: quantity,
                },
                ...prevState.slice(index + 1),
            ];
        });
    };

    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendRequest = () => {
        const data = load();
        // products params for mail api
        const productsParams = data.cart.items.map((i) => `${i.product.partNumber},${i.product.name},${i.quantity}`).join('qqqq');

        if (!name) {
            toast.error('Please fill in the name column!', { theme: 'colored', autoClose: 2000 });
            return;
        }

        if (!companyName) {
            toast.error('Please fill in the company name column!', { theme: 'colored', autoClose: 2000 });
            return;
        }

        if (!email) {
            toast.error('Please fill in the email column!', { theme: 'colored', autoClose: 2000 });
            return;
        }

        if (!message) {
            toast.error('Please fill in the message column!', { theme: 'colored', autoClose: 2000 });
            return;
        }
        const params = {
            name,
            address: companyName,
            number: '0988123123',
            website,
            email,
            message,
            products: productsParams,
        };

        axios.post('https://t-market-api.herokuapp.com/v1/api/testMail', params)
            .then((response) => {
                toast.success('Inquiry will be sent in 5 minutes.', { theme: 'colored', autoClose: 2000 });
            })
            .catch((error) => { console.log(error); });
    };
    if (items.length === 0) {
        return (
            <React.Fragment>
                <PageTitle>{intl.formatMessage({ id: 'HEADER_SHOPPING_CART' })}</PageTitle>

                <BlockHeader
                    breadcrumb={[
                        { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
                        { title: intl.formatMessage({ id: 'LINK_CART' }), url: url.cart() },
                    ]}
                />

                <div className="block-empty">
                    <div className="container">
                        <div className="block-empty__body">
                            <h1 className="block-empty__title">
                                <FormattedMessage id="HEADER_SHOPPING_CART_EMPTY_TITLE" />
                            </h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: intl.formatMessage({ id: 'HEADER_SHOPPING_CART_EMPTY_SUBTITLE' }),
                                }}
                            />
                            <div className="block-empty__action">
                                <AppLink href={url.home()} className="btn btn-primary btn-sm">
                                    <FormattedMessage id="BUTTON_GO_TO_HOMEPAGE" />
                                </AppLink>
                            </div>
                        </div>
                    </div>
                </div>

                <BlockSpace layout="before-footer" />
            </React.Fragment>
        );
    }
    const idPrefix = '';
    const fieldId = idPrefix ? `${idPrefix}-` : '';
    const table = (
        <table className="cart-table__table">
            <thead className="cart-table__head">
                <tr className="cart-table__row">
                    <th className="cart-table__column cart-table__column--image">
                        <FormattedMessage id="TABLE_IMAGE" />
                    </th>
                    <th className="cart-table__column cart-table__column--product">
                        <FormattedMessage id="TABLE_PRODUCT" />
                    </th>
                    {/* <th className="cart-table__column cart-table__column--price">
                        <FormattedMessage id="TABLE_PRICE" />
                    </th> */}
                    <th className="cart-table__column cart-table__column--quantity">
                        <FormattedMessage id="TABLE_QUANTITY" />
                    </th>
                    {/* <th className="cart-table__column cart-table__column--total">
                        <FormattedMessage id="TABLE_TOTAL" />
                    </th> */}
                    <th className="cart-table__column cart-table__column--remove">
                        <span className="sr-only">
                            <FormattedMessage id="TABLE_REMOVE" />
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody className="cart-table__body">
                {items.map((item) => (
                    <tr key={item.id} className="cart-table__row">
                        <td className="cart-table__column cart-table__column--image">
                            <div className="image image--type--product">
                                <AppLink href={url.product(item.product)} className="image__body">
                                    <AppImage
                                        className="image__tag"
                                        src={item.product.images && item.product.images[0]}
                                    />
                                </AppLink>
                            </div>
                        </td>
                        <td className="cart-table__column cart-table__column--product">
                            <AppLink href={url.product(item.product)} className="cart-table__product-name">
                                {item.product.name}
                            </AppLink>
                            {item.options.length > 0 && (
                                <ul className="cart-table__options">
                                    {item.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            {`${option.name}: ${option.value}`}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </td>
                        {/* <td
                            className="cart-table__column cart-table__column--price"
                            data-title={intl.formatMessage({ id: 'TABLE_PRICE' })}
                        >
                            <CurrencyFormat value={item.price} />
                        </td> */}
                        <td
                            className="cart-table__column cart-table__column--quantity"
                            data-title={intl.formatMessage({ id: 'TABLE_QUANTITY' })}
                        >
                            <InputNumber
                                min={1}
                                className="cart-table__quantity"
                                value={getItemQuantity(item)}
                                onChange={(quantity) => handleChangeQuantity(item, quantity)}
                            />
                        </td>
                        {/* <td
                            className="cart-table__column cart-table__column--total"
                            data-title={intl.formatMessage({ id: 'TABLE_TOTAL' })}
                        >
                            <CurrencyFormat value={item.total} />
                        </td> */}
                        <td className="cart-table__column cart-table__column--remove">
                            <AsyncAction
                                action={() => cartRemoveItem(item.id)}
                                render={({ run, loading }) => (
                                    <button
                                        type="button"
                                        className={classNames(
                                            'cart-table__remove',
                                            'btn',
                                            'btn-sm',
                                            'btn-icon',
                                            'btn-muted',
                                            {
                                                'btn-loading': loading,
                                            },
                                        )}
                                        onClick={run}
                                    >

                                        <Cross12Svg />
                                    </button>
                                )}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot className="cart-table__foot">
                <tr>
                    <td colSpan={6}>
                        <div className="cart-table__actions">
                            <form className="cart-table__coupon-form form-row">
                                {/* <div className="form-group mb-0 col flex-grow-1">
                                    <label htmlFor="coupon-code" className="sr-only">
                                        <FormattedMessage id="INPUT_COUPON_CODE_LABEL" />
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="coupon-code"
                                        placeholder={intl.formatMessage({ id: 'INPUT_COUPON_CODE_PLACEHOLDER' })}
                                    />
                                </div>
                                <div className="form-group mb-0 col-auto">
                                    <button type="button" className="btn btn-sm btn-primary">
                                        <FormattedMessage id="BUTTON_APPLY_COUPON" />
                                    </button>
                                </div> */}
                            </form>
                            <div className="cart-table__update-button">
                                <AsyncAction
                                    action={updateQuantities}
                                    render={({ run, loading }) => (
                                        <button
                                            type="button"
                                            className={classNames('btn', 'btn-sm', 'btn-primary', {
                                                'btn-loading': loading,
                                            })}
                                            disabled={!cartNeedUpdate()}
                                            onClick={run}
                                        >
                                            <FormattedMessage id="BUTTON_UPDATE_CART" />
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );

    const totals = (
        <div className="card">
            <div className="card-body card-body--padding--2">
                <h3 className="card-title">
                    <FormattedMessage id="HEADER_CART_TOTALS" />
                </h3>

                {/* <table className="cart__totals-table"> */}
                <div className="cart__totals-table">
                    {cart.totals.length > 0 && (
                        <React.Fragment>
                            <div className="form-row">
                                <div className="form-group col-md-6 required">
                                    <label htmlFor={`${fieldId}first-name`}>
                                        <FormattedMessage id="INPUT_FORM_NAME_LABEL" />
                                    </label>
                                    <input
                                        type="text"
                                        id={`${fieldId}first-name`}
                                        className={classNames('form-control', {
                                            // 'is-invalid': errors?.firstName,
                                        })}
                                        defaultValue={name}
                                        onChange={(e) => { setName(e.target.value); }}
                                        // placeholder={intl.formatMessage({ id: 'INPUT_FIRST_NAME_PLACEHOLDER' })}
                                    // {...register(`${ns}firstName`, { required: true })}
                                    />
                                    <div className="invalid-feedback">
                                        {/* {errors?.firstName?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )} */}
                                    </div>
                                </div>
                                <div className="form-group col-md-6 required">
                                    <label htmlFor={`${fieldId}first-name`}>
                                        <FormattedMessage id="INPUT_FORM_COMPANY_LABEL" />
                                    </label>
                                    <input
                                        type="text"
                                        id={`${fieldId}first-name`}
                                        className={classNames('form-control', {
                                            // 'is-invalid': errors?.firstName,
                                        })}
                                        defaultValue={companyName}
                                        onChange={(e) => { setCompanyName(e.target.value); }}
                                        // placeholder={intl.formatMessage({ id: 'INPUT_FIRST_COMPAMY_PLACEHOLDER' })}
                                    // {...register(`${ns}firstName`, { required: true })}
                                    />
                                    <div className="invalid-feedback">
                                        {/* {errors?.firstName?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )} */}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor={`${fieldId}first-name`}>
                                        <FormattedMessage id="INPUT_FORM_WEBSITE_LABEL" />
                                    </label>
                                    <input
                                        type="text"
                                        id={`${fieldId}first-name`}
                                        className={classNames('form-control', {
                                            // 'is-invalid': errors?.firstName,
                                        })}
                                        defaultValue={website}
                                        onChange={(e) => { setWebsite(e.target.value); }}
                                        // placeholder={intl.formatMessage({ id: 'INPUT_FIRST_WEBSITE_PLACEHOLDER' })}
                                    // {...register(`${ns}firstName`, { required: true })}
                                    />
                                    <div className="invalid-feedback">
                                        {/* {errors?.firstName?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )} */}
                                    </div>
                                </div>
                                <div className="form-group col-md-6 required">
                                    <label htmlFor={`${fieldId}first-name`}>
                                        <FormattedMessage id="INPUT_FORM_EMAIL_LABEL" />
                                    </label>
                                    <input
                                        type="text"
                                        id={`${fieldId}first-name`}
                                        className={classNames('form-control', {
                                            // 'is-invalid': errors?.firstName,
                                        })}
                                        defaultValue={email}
                                        onChange={(e) => { setEmail(e.target.value); }}
                                        // placeholder={intl.formatMessage({ id: 'INPUT_FIRST_EMAIL_PLACEHOLDER' })}
                                    // {...register(`${ns}firstName`, { required: true })}
                                    />
                                    <div className="invalid-feedback">
                                        {/* {errors?.firstName?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )} */}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12 required">
                                    <label htmlFor={`${fieldId}first-name`}>
                                        <FormattedMessage id="INPUT_FORM_MESSAGE_LABEL" />
                                    </label>
                                    <input
                                        type="text"
                                        id={`${fieldId}first-name`}
                                        className={classNames('form-control', {
                                            // 'is-invalid': errors?.firstName,
                                        })}
                                        defaultValue={message}
                                        onChange={(e) => { setMessage(e.target.value); }}
                                        // placeholder={intl.formatMessage({ id: 'INPUT_FIRST_MESSAGE_PLACEHOLDER' })}
                                    // {...register(`${ns}firstName`, { required: true })}
                                    />
                                    <div className="invalid-feedback">
                                        {/* {errors?.firstName?.type === 'required' && (
                                    <FormattedMessage id="ERROR_FORM_REQUIRED" />
                                )} */}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                    {/* {cart.totals.length > 0 && (
                        <React.Fragment>
                            <thead>
                                <tr>
                                    <th>
                                        <FormattedMessage id="TABLE_SUBTOTAL" />
                                    </th>
                                    <td>
                                        <CurrencyFormat value={cart.subtotal} />
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.totals.map((total, index) => (
                                    <tr key={index}>
                                        <th>
                                            <FormattedMessage id={`TABLE_TOTAL_${total.title}`} />
                                        </th>
                                        <td>
                                            <CurrencyFormat value={total.price} />

                                            {total.type === 'shipping' && (
                                                <div>
                                                    <AppLink anchor onClick={(event) => event.preventDefault()}>
                                                        <FormattedMessage id="LINK_CALCULATE_SHIPPING" />
                                                    </AppLink>
                                                </div>
                                            )}

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </React.Fragment>
                    )} */}
                    {/* <tfoot>
                        <tr>
                            <th>
                                <FormattedMessage id="TABLE_TOTAL" />
                            </th>
                            <td>
                                <CurrencyFormat value={cart.total} />
                            </td>
                        </tr>
                    </tfoot> */}
                </div>

                {/* <AppLink href={url.checkout()} className="btn btn-primary btn-xl btn-block"> */}
                <div className="btn btn-primary btn-xl btn-block" onClick={sendRequest}>
                    <FormattedMessage id="BUTTON_PROCEED_TO_CHECKOUT" />
                </div>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <PageTitle>{intl.formatMessage({ id: 'HEADER_SHOPPING_CART' })}</PageTitle>

            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_SHOPPING_CART" />}
                breadcrumb={[
                    { title: intl.formatMessage({ id: 'LINK_HOME' }), url: url.home() },
                    { title: intl.formatMessage({ id: 'LINK_CART' }), url: url.cart() },
                ]}
            />

            <div className="block">
                <div className="container">
                    <div className="cart">
                        <div className="cart__table cart-table">
                            {table}
                        </div>
                        <div className="cart__totals">
                            {totals}
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
