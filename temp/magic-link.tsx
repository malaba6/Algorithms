import { useState } from 'react';

import SubpageContainer from 'components/containers/subpage.container';
import Table from 'components/tables/table';
import RequestContainer from 'components/containers/request.container';
import { useAppSelector } from 'redux/hooks';
import { loadLinks } from './magic-links.thunks';
import { selectMagicLinks } from './magic-link.slice';
import { LinkIcon } from '@heroicons/react/outline';
import FormInputAddon from 'components/forms/form-input-addon';
import { tableColumns } from 'components/tables/table-body.helper';
import TableBody from 'components/tables/table.body';
import useFetch from 'hooks/useFetch';
import { LinkStatus } from 'components/badges/link-status.badge';
import TableShimmer from './magic-link.shimmer';
import { selectRefetch } from 'refetch/refetch.slice';

const MagicLink = () => {
  const { refetch } = useAppSelector(selectRefetch);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { isFetching } = useFetch('links' + currentPage, () => loadLinks({ page: currentPage }), refetch);
  const { links } = useAppSelector(selectMagicLinks);

  const headers = ['Name', 'User', 'Original Link', 'Redirect Link', 'Link status', ' '];

  const columnData = [
    'name',
    'user',
    {
      key: 'originalLink',
      render: (_: any, rowData: any) => (
        <a
          target="_blank"
          href={rowData.originalLink}
          className="col-span-1 inline-flex justify-center items-center p-3 text-gray-500 hover:text-blue-400"
        >
          <LinkIcon className="h-4 w-4" />
          Link
        </a>
      ),
    },
    {
      key: 'redirectLink',
      render: (_: any, rowData: any) => (rowData.status === 'working' ? <FormInputAddon link={rowData.link} /> : null),
    },
    {
      key: 'status',
      render: (_: any, rowData: any) => <LinkStatus link={rowData.status} />,
    },
  ];

  const columns = tableColumns(columnData, { field: 'Name' });

  return (
    <>
      <SubpageContainer title="Magic Links" addUrl="new" showAdd>
        <Table headers={headers} data={links} setCurrentPage={setCurrentPage}>
          <RequestContainer loading={isFetching} fallback={<TableShimmer headers={headers} span={6} />}>
            <TableBody columns={columns} data={links?.docs} span={6} deleteUrl="/magic-links/" />
          </RequestContainer>
        </Table>
      </SubpageContainer>
    </>
  );
};

export default MagicLink;
