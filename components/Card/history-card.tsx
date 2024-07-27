"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

interface Token {
  contract_address: string;
  name: string;
  symbol: string;
}

interface Transaction {
  to: string;
  from: string;
  blockNumber: number | null;
  transactionHash: string | null;
  method: string;
  decimal: number | null;
  amount: string | null;
  token: Token;
  timestamp: string;
}

interface ApiResponseData {
  status: number;
  result: Transaction[];
  pagination: {
    current_page: number;
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    per_page: number;
    prev_page_url: string | null;
    total: number;
  };
}

interface ApiResponse {
  status: string;
  data: ApiResponseData;
}

const HistoryCard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [availableToken, setAvailableToken] = useState<string>("52000 ETH"); // Adjust this based on actual data source

  useEffect(() => {
    fetch("http://127.0.0.1:8000/maschain_token/api_get_transaction_from/0x5b3a8eCB9677F56e46d67B7e69900cE322c030d1")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        setTransactions(data.data.result);
      })
      .catch((error) => {
        console.error("Error fetching the API:", error);
      });
  }, []);

  return (
    <div className="mt-8 w-full max-h-fit rounded-2xl overflow-hidden border-gray-300" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
      <div className="px-4 py-5">
        <div className='flex flex-row items-center justify-between bg-lg-light-cyan rounded-full px-4 py-3'>
          <div className='text-white text-sm'>Available Token</div>
          <div className='text-white text-base font-bold'>{availableToken}</div>
        </div>
        <div className="py-8">
          <h2 className="text-base font-bold justify-center text-center py-4">Transaction History</h2>
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <div key={index} className="flex justify-between text-base items-center pt-10 pb-2 border-b border-light-blacK">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <p className="text-base font-medium">{new Date(transaction.timestamp).toLocaleDateString()}</p>
                    <div className="pl-3 flex items-center justify-center">
                      <span className="flex items-center justify-center bg-dark-green-transparent rounded-full px-3 py-0.5">
                        <Icon
                          icon="charm:circle-tick"
                          className="text-dark-green mr-2"
                          style={{ fontSize: "14px" }} // Adjust icon size as needed
                        />
                        <p className="text-xs font-semibold text-dark-green">Paid</p>
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-xs-light-gray">{transaction.amount}</p>
                </div>
                <div className="text-base font-semibold text-light-red">- {transaction.amount}</div>
              </div>
            ))
          ) : (
            <p>No transactions found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;

