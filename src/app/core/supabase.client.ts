import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://ibifjgqveowajnbegtet.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliaWZqZ3F2ZW93YWpuYmVndGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjEzNDYsImV4cCI6MjA5NDA5NzM0Nn0.bNdr2mi-oOpZG31TEgd-1G1UGAfRYZIIvk8G5jvR-rc'
);