import React from 'react';



const MainView = () => {
  return (
    <div className='p-6 flex justify-center flex-col w-full h-full'>
      <div className='font-bold text-5xl'>New Board</div>
      <p className='mt-4 text-1xl'>
        Think for a new board for pad
      </p>
      <p className='mt-2 text-1xl'>
        Free to use
      </p>
      <div className='mt-3 p-4 rounded-2xl bg-sky-400 hover:bg-sky-800 transition cursor-pointer w-40'>
        <a href="https://objects.githubusercontent.com/github-production-release-asset-2e65be/774871346/45084fa8-abae-4de7-a81b-8b5c1f3cef90?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240321T133226Z&X-Amz-Expires=300&X-Amz-Signature=f770af71e766e65377b2303171f592c34a33234d90cca3c5505a9cdd9ae2349e&X-Amz-SignedHeaders=host&actor_id=86446582&key_id=0&repo_id=774871346&response-content-disposition=attachment%3B%20filename%3DPureBoard1.0.0.apk&response-content-type=application%2Fvnd.android.package-archive" target="_blank" rel="noopener noreferrer">
          Download App
        </a>
      </div>
    </div>
  );
};

export default MainView;
