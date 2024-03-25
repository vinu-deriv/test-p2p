import React from 'react';
import AdCreateEditErrorModal from 'Components/modal-manager/modals/ad-create-edit-error-modal';
import AddPaymentMethodErrorModal from 'Components/modal-manager/modals/add-payment-method-error-modal';
import AdErrorTooltipModal from 'Components/modal-manager/modals/ad-error-tooltip-modal';
import AdVisibilityErrorModal from 'Components/modal-manager/modals/ad-visibility-error-modal';
import BuySellModal from 'Components/modal-manager/modals/buy-sell-modal';
import BlockUserFilterModal from 'Components/modal-manager/modals/block-user-filter-modal';
import BlockUserModal from 'Components/modal-manager/modals/block-user-modal';
import CancelAddPaymentMethodModal from 'Components/modal-manager/modals/cancel-add-payment-method-modal';
import CancelEditPaymentMethodModal from 'Components/modal-manager/modals/cancel-edit-payment-method-modal';
import ConfirmDeletePaymentMethodModal from 'Components/modal-manager/modals/confirm-delete-payment-method-modal';
import CreateAdAddPaymentMethodModal from 'Components/modal-manager/modals/create-ad-add-payment-method-modal';
import CurrencySelectorModal from 'Components/modal-manager/modals/currency-selector-modal';
import DailyLimitModal from 'Components/modal-manager/modals/daily-limit-modal';
import DeletePaymentMethodConfirmationModal from 'Components/modal-manager/modals/delete-payment-method-confirmation-modal';
import DeletePaymentMethodErrorModal from 'Components/modal-manager/modals/delete-payment-method-error-modal';
import DisclaimerModal from 'Components/modal-manager/modals/disclaimer-modal';
import EditAdCancelModal from 'Components/modal-manager/modals/edit-ad-cancel-modal';
import EmailLinkBlockedModal from 'Components/modal-manager/modals/email-link-blocked-modal';
import EmailLinkExpiredModal from 'Components/modal-manager/modals/email-link-expired-modal';
import EmailLinkVerifiedModal from 'Components/modal-manager/modals/email-link-verified-modal';
import EmailVerificationModal from 'Components/modal-manager/modals/email-verification-modal';
import ErrorModal from 'Components/modal-manager/modals/error-modal';
import FilterModal from 'Components/modal-manager/modals/filter-modal';
import InvalidVerificationLinkModal from 'Components/modal-manager/modals/invalid-verification-link-modal';
import LeavePageModal from 'Components/modal-manager/modals/leave-page-modal';
import LoadingModal from 'Components/modal-manager/modals/loading-modal';
import MarketRateChangeErrorModal from 'Components/modal-manager/modals/market-rate-change-error-modal';
import MyAdsDeleteModal from 'Components/modal-manager/modals/my-ads-delete-modal';
import MyAdsDeleteErrorModal from 'Components/modal-manager/modals/my-ads-delete-error-modal';
import MyAdsFloatingRateSwitchModal from 'Components/modal-manager/modals/my-ads-floating-rate-switch-modal';
import MyProfileBalanceModal from 'Components/modal-manager/modals/my-profile-balance-modal';
import NicknameModal from 'Components/modal-manager/modals/nickname-modal';
import OrderDetailsCancelModal from 'Components/modal-manager/modals/order-details-cancel-modal';
import OrderDetailsConfirmModal from 'Components/modal-manager/modals/order-details-confirm-modal';
import OrderTimeTooltipModal from 'Components/modal-manager/modals/order-time-tooltip-modal';
import QuickAddModal from 'Components/modal-manager/modals/quick-add-modal';
import RatingModal from 'Components/modal-manager/modals/rating-modal';
import RateChangeModal from 'Components/modal-manager/modals/rate-change-modal';
import RecommendedModal from 'Components/modal-manager/modals/recommended-modal';
import ShareMyAdsModal from 'Components/modal-manager/modals/share-my-ads-modal';

export const Modals = {
    AdCreateEditErrorModal,
    AddPaymentMethodErrorModal,
    AdErrorTooltipModal,
    AdVisibilityErrorModal,
    BuySellModal,
    BlockUserFilterModal,
    BlockUserModal,
    CancelAddPaymentMethodModal,
    CancelEditPaymentMethodModal,
    ConfirmDeletePaymentMethodModal,
    CreateAdAddPaymentMethodModal,
    CurrencySelectorModal,
    DailyLimitModal,
    DeletePaymentMethodConfirmationModal,
    DeletePaymentMethodErrorModal,
    DisclaimerModal,
    EditAdCancelModal,
    EmailLinkBlockedModal,
    EmailLinkExpiredModal,
    EmailLinkVerifiedModal,
    EmailVerificationModal,
    ErrorModal,
    FilterModal,
    InvalidVerificationLinkModal,
    LeavePageModal,
    LoadingModal,
    MarketRateChangeErrorModal,
    MyAdsDeleteModal,
    MyAdsDeleteErrorModal,
    MyAdsFloatingRateSwitchModal,
    MyProfileBalanceModal,
    NicknameModal,
    OrderDetailsCancelModal,
    OrderDetailsConfirmModal,
    OrderTimeTooltipModal,
    QuickAddModal,
    RatingModal,
    RateChangeModal,
    RecommendedModal,
    ShareMyAdsModal,
} as const;

export type TModals = typeof Modals;
export type TModalKeys = keyof TModals;
export type TModalProps = {
    [T in TModalKeys]: Parameters<TModals[T]>[0] extends { [key: string]: any }
        ? Parameters<TModals[T]>[0]
        : Record<string, never>;
};
