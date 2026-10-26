# Line ~145 in cancel action
today = request.data.get('today', str(date.today()))
from datetime import datetime
today_date = datetime.strptime(today, '%Y-%m-%d').date()
