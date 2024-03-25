import React from 'react';
import { Button, Modal, Text } from '@deriv/components';
import { observer } from '@deriv/stores';
import { Localize } from 'Components/i18next';
import { useModalManagerContext } from 'Components/modal-manager/modal-manager-context';
import { useStores } from 'Stores';

type TBlockUserModalProps = {
    advertiser_name: string;
    is_advertiser_blocked: boolean;
    onCancel: () => void;
    onSubmit: () => void;
};

const BlockUserModal = ({ advertiser_name, is_advertiser_blocked, onCancel, onSubmit }: TBlockUserModalProps) => {
    const { general_store } = useStores();
    const { is_modal_open } = useModalManagerContext();

    return (
        <Modal
            className='block-user-modal'
            has_close_icon={false}
            is_open={is_modal_open && !general_store.block_unblock_user_error}
            small
            title={
                <Text color='prominent' weight='bold'>
                    {is_advertiser_blocked ? (
                        <Localize
                            i18n_default_text='Unblock {{advertiser_name}}?'
                            values={{
                                advertiser_name,
                            }}
                        />
                    ) : (
                        <Localize
                            i18n_default_text='Block {{advertiser_name}}?'
                            values={{
                                advertiser_name,
                            }}
                        />
                    )}
                </Text>
            }
        >
            <Modal.Body className='block-user-modal__body'>
                <Text color='prominent' size='xs'>
                    {is_advertiser_blocked ? (
                        <Localize
                            i18n_default_text="You will be able to see {{ advertiser_name }}'s ads. They'll be able to place orders on your ads, too."
                            values={{ advertiser_name }}
                        />
                    ) : (
                        <Localize
                            i18n_default_text="You won't see {{advertiser_name}}'s ads anymore and they won't be able to place orders on your ads."
                            values={{ advertiser_name }}
                        />
                    )}
                </Text>
            </Modal.Body>
            <Modal.Footer>
                <Button secondary onClick={onCancel} large>
                    <Localize i18n_default_text='Cancel' />
                </Button>
                <Button primary large onClick={onSubmit}>
                    {is_advertiser_blocked ? (
                        <Localize i18n_default_text='Unblock' />
                    ) : (
                        <Localize i18n_default_text='Block' />
                    )}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default observer(BlockUserModal);
