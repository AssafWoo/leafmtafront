import { useToast } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";

const usePagination = (queryName, page) => {
	const toast = useToast();

	const fetchPaginatedData = (page = 0) =>
		fetch("/api/transactions?page=" + page).then((res) => res.json());

	const { isLoading, isError, error, data, isFetching } = useQuery(
		[queryName, page],
		() => fetchPaginatedData(page),
		{ keepPreviousData: true }
	);

	if (isLoading || isFetching) {
		return <Spinner />;
	}
	if (isError) {
		return toast({
			title: "Error accured.",
			description: `${error}`,
			status: "error",
			duration: 2000,
			isClosable: true,
		});
	}
	return { data };
};

export default usePagination;

/*
        <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            {data.projects.map(project => (
              <p key={project.id}>{project.name}</p>
            ))}
          </div>
        )}
        <span>Current Page: {page + 1}</span>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            if (!isPreviousData && data.hasMore) {
              setPage(old => old + 1)
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !data?.hasMore}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{' '}
      </div>
  
  
  */
