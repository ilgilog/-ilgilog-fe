import { TSwal, TSwalTemplate } from './typed';
import 'sweetalert2';
import Swal from 'sweetalert2';

const template = ({ action, failed, ...args }: TSwalTemplate) => {
    Swal.fire({ ...args })
        .then(action)
        .catch(failed);
};

const success: TSwal = (args) => {
    template({ 
        icon: 'success', 
        ...args, 
        confirmButtonText: '확인',
        confirmButtonColor: "#d5bdaf",
        allowEnterKey: false,
        width: 400,
    });
};

const error: TSwal = (args) => {
    template({ icon: 'error', ...args, confirmButtonText: '확인' });
};

const warning: TSwal = (args) => {
    template({
        ...args,
        icon: 'warning',
        width: 400,
        confirmButtonText: '할게요!',
        cancelButtonText: '잠시만요!',
        showCancelButton: true,
        confirmButtonColor: "#d5bdaf",
        cancelButtonColor: "#c4c4c4",
        reverseButtons: true,
        allowEnterKey: false,
        allowOutsideClick: () => !Swal.isLoading(),
    });
};

const basic: TSwal = (args) => {
    template({ ...args, confirmButtonText: '확인' });
};

const confirm: TSwal = (args) => {
    template({
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        reverseButtons: true,
        ...args
    });
};

const input: TSwal = (args) => {
    template({
        input: 'number',
        inputAttributes: {
            autocapitalize: 'off'
        },
        cancelButtonText: '취소',
        confirmButtonText: '확인',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        reverseButtons: true,
        allowOutsideClick: () => !Swal.isLoading(),
        ...args
    });
};

export const Alert = { success, error, warning, confirm, basic, input };