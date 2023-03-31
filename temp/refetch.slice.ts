import React, { ReactElement, useRef, useState } from 'react';
import { Field } from 'react-final-form';
import FormLabel from 'components/forms/form-label';
import { postFetch } from 'request/request';
import { store } from 'redux/store';
import { validationError } from 'request/request.slice';
import { isBiggerThan } from 'lib/helpers';
import { globalConfig } from 'lib/global-config';
import Spinner from 'components/shimmer/spinner';
import { useNavigate } from 'react-router-dom';
interface UploadedInterface {
  _id: string;
  jobId: number;
  name: string;
}

/**
 * Form Upload
 * @param label - input label
 * @param name - input name
 * @param col - label grid col , see tailwind col
 * @param span - input grid span
 * @param type - input type text, number, email
 * @param props - other input props
 * @constructor
 */
const HeatmapFormUpload = ({ label = '', name, col = 4, span = 3, ...props }): ReactElement => {
  const { values, id } = props;
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  async function handleUpload(e) {
    try {
      const formData = new FormData();
      const file: File = e.target.files[0];

      if (!isBiggerThan(file.size, globalConfig.maxFileUpload)) {
        setIsUploading(true);
        formData.append('file', file, file.name);
        formData.append('name', values?.name);
        formData.append('preset', 'normal');
        formData.append('group', id);
        const uploadedData: UploadedInterface = await postFetch(
          '/thirdparty/heatmaps/images/upload',
          formData,
          'Uploaded Successfully!'
        );

        if (uploadedData.jobId) {
          setIsUploading(false);
          navigate(`/dashboard/heatmaps/${id}/uploads`);
        } else {
          setIsUploading(false);
        }
      } else {
        setIsUploading(false);
        store.dispatch(validationError({ message: `File limit is ${globalConfig.maxFileUpload}mb` }));
      }
    } catch (e) {
      setIsUploading(false);
    }
  }

  const handleClick = () => {
    fileRef?.current?.click();
  };

  const field = (
    <Field
      name={name}
      id={name}
      component="input"
      className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-s sm:text-sm border-gray-300 rounded-md"
      {...props}
    >
      {({ input }) => {
        const uploadLabel = input.value ? 'Change Logo' : 'Upload Logo';
        return (
          <>
            <input type="hidden" />
            <div className="relative bg-gray-900 bg-opacity-75">
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-opacity-75 bg-gray-900 rounded-lg text-white font-semibold disabled:opacity-50"
                onClick={handleClick}
                disabled={!values?.name}
              >
                {isUploading ? (
                  <div className="flex justify-center items-center gap-2">
                    <Spinner /> Uploading...
                  </div>
                ) : (
                  uploadLabel
                )}
              </button>
              <img className="object-contain h-52 w-full" src={input.value || undefined} />
            </div>
            <input
              {...input}
              ref={fileRef}
              accept="image/jpeg"
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                handleUpload(e);
                input.onChange(e);
              }}
            />
          </>
        );
      }}
    </Field>
  );

  if (!label) return field;
  return (
    <>
      <div className={`sm:grid sm:grid-cols-4 sm:gap-${col} items-start`}>
        <FormLabel label={label} />
        <div className={`mt-1 sm:mt-0 sm:col-span-${span}`}>{field}</div>
      </div>
    </>
  );
};

export default HeatmapFormUpload;
