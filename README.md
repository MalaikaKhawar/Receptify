# Receptify — Multi-Tenant AI Receptionist System - University of Punjab Batch'2022 

**Project Members:**  
- *Malaika Yasmeen Khawar - BITF22M525*  
- *Komal Yousaf - BITF22M513*  
- *Dua Sarwar - BITF22M530*

**Supervisor:**  
- *Sir Mubashar*  

---

## 📝 Project Overview  
Receptify is a **Multi-Tenant AI Receptionist System** that allows multiple businesses to create accounts, connect a Twilio phone number, and automate all inbound calls using an AI voice agent.

Each business can feed its custom information (FAQs, schedules, services, pricing, admissions details, bookings, etc.) and the AI receptionist will answer customer calls 24/7 in **English or Urdu** using **OpenAI** for intelligence and **ElevenLabs** for natural voice.

The system is built to support **hundreds of simultaneous calls** using Twilio’s scalable SIP/Voice API infrastructure.

---

## 🎯 Objectives  
- Build a fully automated AI receptionist solution for **multiple businesses (tenants)**.  
- Allow each tenant to manage their own data, call settings, and AI responses.  
- Use Twilio to handle calls reliably at scale (instead of managing a SIP server).  
- Provide a clean Flutter dashboard for tenants to manage everything.  
- Offer multilingual AI voice support (English + Urdu).  

---

## 🔐 Why Multi-Tenant Security Matters  
Since many businesses share the same platform, strict **data isolation** is required:  
- Each tenant’s business info remains private.  
- Calls, logs, and settings are protected and separated.  
- Access is role-based and secure.  

---

## ⭐ Key Features  

### **Multi-Tenant System**
- Separate signup/login for each business  
- Tenant-specific call routing  
- Tenant-specific AI responses + custom knowledge base  
- Individual call logs & analytics  
- Role-based access (Admin, Staff, Manager)

### **AI Receptionist Features**
- Answers calls automatically  
- Urdu + English conversation  
- Handles bookings, queries, admissions info, restaurant reservations, etc.  
- Customizable tone, behavior, and instructions  
- Supports dynamic response generation via OpenAI  

### **Twilio Integration**
- Buy/attach phone numbers  
- Handle 100+ simultaneous inbound calls  
- Webhook-based real-time processing  
- Reliable, globally distributed infrastructure  

### **Dashboard ReactJS**
- Manage business profile  
- Upload custom FAQs or knowledge base  
- View live call logs  
- Control voice settings (ElevenLabs voice selection)  
- Analytics page for call duration, frequency, and user behavior  

---

## 🧩 Technology Stack  

### AI & Voice  
- **OpenAI API** (Reasoning, response generation)  
- **ElevenLabs** (Voice synthesis for Urdu + English)

### Telephony  
- **Twilio Voice API** (Call handling, scaling, carrier-level reliability)

### Backend  
- Node.js (Express)  
- MongoDB    

### Frontend / Dashboard  
- NextJS/ReactJS
- REST + WebSocket integration  

---

## 🔄 System Workflow  

### **1. Tenant Registration**
1. Business signs up  
2. Dashboard created  
3. Business connects/purchases Twilio number  

### **2. AI Knowledge Setup**
1. Tenant uploads information (FAQs, details, services)  
2. System stores it as their private knowledge base  

### **3. Call Handling**
1. Customer calls the Twilio number  
2. Twilio sends a webhook to backend  
3. Backend generates response via OpenAI  
4. ElevenLabs converts response to voice  
5. Twilio streams the voice back to the caller  
6. Logs stored in tenant account  

### **4. Dashboard**
- Manage data  
- View call logs  
- Edit AI instructions  
- Monitor analytics  

---

## 🚀 Future Prospects  
- Custom AI personalities per business  
- WhatsApp & SMS integration  
- Automated appointment booking  
- Voice cloning  
- Multi-language expansion  
- Web chat & chatbot integration  
