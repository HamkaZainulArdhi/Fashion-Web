"use client";
"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Donor {
  name: string;
  amount: number; // This now represents number of clothing items
  timeAgo: string;
  message?: string;
}

const DonationCampaign: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kisah' | 'update' | 'donatur'>('kisah');
  const [expanded, setExpanded] = useState(false);
  
  const donors: Donor[] = [
    { name: 'Anonymous', amount: 5, timeAgo: '1 jam yang lalu', message: 'Bismillah' },
    { name: 'Anonymous', amount: 2, timeAgo: '7 jam yang lalu' },
    { name: 'Anonymous', amount: 3, timeAgo: '8 jam yang lalu' },
    { name: 'Tina', amount: 10, timeAgo: '21 jam yang lalu' },
    { name: 'Anonymous', amount: 7, timeAgo: '1 hari yang lalu' },
  ];

  // Calculate percentage
  const raised = 240;
  const goal = 500;
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  
  return (
    <div className="min-h-screen flex flex-col bg-whitebg">
      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full md:mt-20">
        <div className="max-w-5xl mx-auto">
          <Image src="/images/detaildonasi/2.jpg" alt="Hero Banner" className="rounded-xl shadow-lg" />
        </div>

        <div className="max-w-6xl mx-auto w-full px-4">
          {/* Progress Section */}
          <div className="bg-white p-6 shadow-sm rounded-lg my-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <span className="text-2xl font-bold">{raised.toLocaleString()} pakaian</span>
                <span className="text-gray-500 ml-1">terkumpul</span>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-gray-500">dari </span>
                <span className="text-gray-700 font-medium">{goal.toLocaleString()} pakaian</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
            
            <div className="flex justify-between">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span>63 Donatur</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>10 hari tersisa</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-b border-gray-200">
            <nav className="flex">
              <button 
                onClick={() => setActiveTab('kisah')}
                className={`px-8 py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'kisah' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Kisah
              </button>
              <button 
                onClick={() => setActiveTab('update')}
                className={`px-8 py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'update' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Update
              </button>
              <button 
                onClick={() => setActiveTab('donatur')}
                className={`px-8 py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'donatur' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Donatur
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 shadow-sm rounded-lg my-4 flex-1">
            {activeTab === 'kisah' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Kisah Panti Asuhan Kasih Ibu</h2>
                <p className="text-gray-700 leading-relaxed">
                  Panti Asuhan Kasih Ibu berdiri sejak tahun 2005 dan saat ini menampung 50 anak-anak 
                  yatim piatu usia 5-17 tahun. Panti asuhan ini berlokasi di pinggiran kota dengan kondisi 
                  bangunan yang sederhana. Para anak asuh sangat membutuhkan pakaian layak pakai untuk kegiatan 
                  sehari-hari dan sekolah
                  {expanded && (
                    <span>
                      . Terutama menjelang musim hujan, banyak anak-anak yang tidak memiliki pakaian hangat yang 
                      memadai. Selain itu, beberapa anak juga tumbuh dengan cepat sehingga pakaian mereka sudah 
                      tidak muat lagi. Dengan donasi pakaian dari Anda, anak-anak di panti asuhan ini akan mendapatkan 
                      pakaian layak dan nyaman untuk beraktivitas sehari-hari. Jenis pakaian yang dibutuhkan meliputi 
                      seragam sekolah, pakaian sehari-hari, pakaian hangat, dan pakaian dalam. Semua pakaian dalam kondisi 
                      layak pakai akan sangat membantu mereka.
                    </span>
                  )}
                </p>
                <button 
                  onClick={() => setExpanded(!expanded)} 
                  className="text-primary mt-3 flex items-center text-sm"
                >
                  Baca selengkapnya
                  <svg className={`ml-1 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <div className="mt-8 flex flex-wrap">
                  <div className="mr-4 mb-4">
                    <button className="flex items-center justify-center rounded-lg border border-gray-300 p-3 w-12 h-12">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mr-4 mb-4">
                    <button className="bg-primary text-white py-3 px-4 rounded-lg font-medium">
                      <Link href="/error">
                        Donasikan Sekarang
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Update Tab */}
            {activeTab === 'update' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Update Terbaru</h2>
                <div className="rounded-lg border border-gray-200 p-4 mb-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-100 rounded-full p-2 mr-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Update Donasi Pakaian</h3>
                      <p className="text-gray-500 text-sm">5 jam yang lalu</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Alhamdulillah, sudah terkumpul 240 pakaian dari target 1000 pakaian. Kami sangat berterima kasih kepada semua donatur. Saat ini kami terutama masih membutuhkan pakaian hangat dan seragam sekolah untuk anak-anak. Bantuan Anda sangat berarti bagi mereka.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 mb-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-100 rounded-full p-2 mr-3">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Update Donasi Pakaian</h3>
                      <p className="text-gray-500 text-sm">3 hari yang lalu</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Bismillah. Kami membuka donasi pakaian untuk panti asuhan dengan target 500 item. Terima kasih kepada semua donatur! Saat ini sangat membutuhkan pakaian hangat dan seragam sekolah untuk anak-anak. Bantuan Anda sangat berarti bagi mereka. Untuk info donasi, silakan hubungi kami.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap">
                  <div className="mr-4 mb-4">
                    <button className="flex items-center justify-center rounded-lg border border-gray-300 p-3 w-12 h-12">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mr-4 mb-4">
                    <button className="bg-primary text-white py-3 px-4 rounded-lg font-medium">
                      Donasikan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Donatur Tab */}
            {activeTab === 'donatur' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Donatur (63)</h2>
                <div className="space-y-4">
                  {donors.map((donor, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 pb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center text-gray-500 font-bold">
                        {donor.name !== 'Anonymous' ? donor.name[0] : 'A'}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <div className="font-medium">{donor.name}</div>
                          <div className="text-xs text-gray-500">{donor.timeAgo}</div>
                        </div>
                        <div className="text-sm text-gray-700">Donasi {donor.amount} pakaian</div>
                        {donor.message && (
                          <div className="text-sm text-gray-600 mt-1">{donor.message}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap">
                  <div className="mr-4 mb-4">
                    <button className="flex items-center justify-center rounded-lg border border-gray-300 p-3 w-12 h-12">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mr-4 mb-4">
                    <button className="bg-primary text-white py-3 px-4 rounded-lg font-medium">
                      Donasikan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonationCampaign;