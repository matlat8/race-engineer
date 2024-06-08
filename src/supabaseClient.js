import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://opurxhllzusqrdaggvit.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wdXJ4aGxsenVzcXJkYWdndml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTcxMjksImV4cCI6MjAyNjAzMzEyOX0.WqebH6TfeG438Sjus0Qz21lBNxV5dwejKO2H8nEZtWk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)