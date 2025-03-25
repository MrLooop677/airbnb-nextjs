import { format } from 'date-fns';

import { getSearchResult } from '../utils/api';
import { SearchResultData } from '../types/app';
import Map from '../components/map';
import Header from '../components/header/header';
import Footer from '../components/footer';
import ListingCard from '../components/listing-card';

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const SearchResult = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  // Await the searchParams
  const { location, startDate, endDate, numOfGuests } = await searchParams;
  
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const filters = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];
  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section>
          <div className='container flex'>
            <div className='pt-14 pr-4'>
              <p className='text-xs'>
                300+ Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className='text-3xl font-semibold mt-2 mb-6 '>
                Stays in {location}
              </h1>
              <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                {filters.map((filter) => (
                  <button type='button' className='filter-btn' key={filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>
            <div className='hidden xl:inline-flex xl:min-w-[600px]'>
              <Map searchResultData={searchResultData} />

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;